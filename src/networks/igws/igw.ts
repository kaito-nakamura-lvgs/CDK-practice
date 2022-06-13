import { Construct, ec2 } from 'lib/aws';
import IgwBase from './igwBase';

/**
 * インターネットゲートウェイクラス
 */
export default class Igw extends IgwBase {

  /**
   * コンストラクタ
   * @param {string} igwName インターネットゲートウェイ名
   * @param {Construct} scope スコープ
   * @param {string} vpcId VpcId
   * @param {any} configs 設定
   */
  constructor(igwName: string, scope: Construct, vpcId: string, configs: any = {}) {
    const defaultConfigs = {
      tags: [{
        key: 'Name',
        value: igwName
      }]
    };
    configs = Object.assign(defaultConfigs, configs);

    super(igwName, scope, vpcId, configs);

    this.createNetworkResource();
    this.attachInternetGatewayToVpc();
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  createNetworkResource(): void {
    this.igw = new ec2.CfnInternetGateway(this.scope, this.name, this.configs);
    this.id = this.igw.ref;
  }

  /**
   * インターネットゲートウェイをVPCにアタッチ
   * @return {void}
   */
  attachInternetGatewayToVpc(): void {
    new ec2.CfnVPCGatewayAttachment(this.scope, 'irt-igw-attach', {
      vpcId: this.vpcId,
      internetGatewayId: this.igw.ref
    });
  }

  /**
   * idを取得
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }
}