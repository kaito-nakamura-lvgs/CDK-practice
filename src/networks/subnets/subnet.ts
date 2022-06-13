import { Construct, ec2 } from 'lib/aws';
import SubnetBase from './subnetBase';

/**
 * サブネットクラス
 */
export default class Subnet extends SubnetBase {

  /** @type {string} アベイラビリティゾーン */
  private availabilityZone: string;
  /** @type {boolean} パブリックIPアドレスを割り当てるか */
  private mapPublicIpOnLaunch: boolean;

  /**
   * コンストラクタ
   * @param {string} subnetName サブネット名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定
   */
  constructor(subnetName: string, scope: Construct, configs: any = {}) {
    const defaultConfigs = {
      tags: [{
        key: 'Name',
        value: subnetName
      }]
    };
    configs = Object.assign(defaultConfigs, configs);

    super(subnetName, scope, configs);

    this.availabilityZone = this.configs.availabilityZone;
    this.mapPublicIpOnLaunch = this.configs.mapPublicIpOnLaunch;

    this.createNetworkResource();
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  createNetworkResource(): void {
    this.subnet = new ec2.CfnSubnet(this.scope, this.name, this.configs);
    this.id = this.subnet.ref;
  }

  /**
   * idを取得
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }
}