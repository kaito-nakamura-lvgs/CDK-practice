import { Construct, ec2 } from 'lib/aws';
import NetworkResourceBase from 'src/networks/networkResourceBase';

/**
 * サブネットベースクラス
 */
export default abstract class SubnetBase extends NetworkResourceBase {

  /** @type {string} CIDRブロック */
  protected cidrBlock: string;
  /** @type {CfnVPC} サブネットインスタンス */
  protected subnet: ec2.CfnSubnet;
  /** @type {string} VpcId */
  protected vpcId: string;

  /**
   * コンストラクタ
   * @param {string} subnetName サブネット名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定群
   */
  constructor(subnetName: string, scope: Construct, configs: any) {
    super(subnetName, scope, configs);

    this.cidrBlock = this.configs.cidrBlock;
    this.vpcId = this.configs.vpcId;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;
}