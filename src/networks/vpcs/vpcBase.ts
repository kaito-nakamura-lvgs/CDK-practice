import { Construct, ec2 } from 'lib/aws';
import NetworkResourceBase from 'src/networks/networkResourceBase';

/**
 * VPCベースクラス
 */
export default abstract class VpcBase extends NetworkResourceBase {

  /** @type {string} CIDRブロック */
  protected cidrBlock: string;
  /** @type {CfnVPC} VPCインスタンス */
  protected vpc: ec2.CfnVPC;

  /**
   * コンストラクタ
   * @param {string} vpcName Vpc名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定群
   */
  constructor(vpcName: string, scope: Construct, configs: any) {
    super(vpcName, scope, configs);

    this.cidrBlock = this.configs.cidrBlock;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;
}