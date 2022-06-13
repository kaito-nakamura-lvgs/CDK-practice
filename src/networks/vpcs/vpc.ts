import { Construct, ec2 } from 'lib/aws';
import VpcBase from './vpcBase';

/**
 * VPCクラス
 */
export default class Vpc extends VpcBase {

  /** @type {boolean} DNS解決を有効にするか */
  private enableDnsSupport: boolean;
  /** @type {boolean} DNSホスト名解決を有効にするか */
  private enableDnsHostnames: boolean;
  /** @type {string} デフォルトテナンシー */
  private instanceTenancy: string;

  /**
   * コンストラクタ
   * @param {string} vpcName Vpc名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定
   */
  constructor(vpcName: string, scope: Construct, configs: any = {}) {
    const instanceTenancy = 'default';

    const defaultConfigs = {
      instanceTenancy: instanceTenancy,
      tags: [{
        key: 'Name',
        value: vpcName
      }]
    };
    configs = Object.assign(defaultConfigs, configs);

    super(vpcName, scope, configs);

    this.enableDnsSupport = this.configs.enableDnsSupport;
    this.enableDnsHostnames = this.configs.enableDnsHostnames;
    this.instanceTenancy = this.configs.instanceTenancy;

    this.createNetworkResource();
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  createNetworkResource(): void {
    this.vpc = new ec2.CfnVPC(this.scope, this.name, this.configs);
    this.id = this.vpc.ref;
  }

  /**
   * idを取得
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }
}