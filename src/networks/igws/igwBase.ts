import { Construct, ec2 } from 'lib/aws';
import NetworkResourceBase from 'src/networks/networkResourceBase';

/**
 * インターネットゲートウェイベースクラス
 */
export default abstract class IgwBase extends NetworkResourceBase {

  /** @type {CfnInternetGateway} インターネットゲートウェイインスタンス */
  protected igw: ec2.CfnInternetGateway;
    /** @type {string} VpcId*/
  protected vpcId: string;

  /**
   * コンストラクタ
   * @param {string} igwName インターネットゲートウェイ名
   * @param {Construct} scope スコープ
   * @param {string} vpcId VpcId
   * @param {any} configs 設定群
   */
  constructor(igwName: string, scope: Construct, vpcId: string, configs: any) {
    super(igwName, scope, configs);
    this.vpcId = vpcId;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;

  /**
   * インターネットゲートウェイをVPCにアタッチ
   * @return {void}
   */
  abstract attachInternetGatewayToVpc(): void;
}