import { Construct, ec2 } from 'lib/aws';
import NetworkResourceBase from 'src/networks/networkResourceBase';

/**
 * ルートテーブルベースクラス
 */
export default abstract class RouteTableBase extends NetworkResourceBase {

  /** @type {CfnRouteTable} ルートテーブルインスタンス */
  protected routeTable: ec2.CfnRouteTable;
  /** @type {string} VpcId */
  protected vpcId: string;

  /**
   * コンストラクタ
   * @param {string} routeTableName ルートテーブル名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定群
   */
  constructor(routeTableName: string, scope: Construct, configs: any) {
    super(routeTableName, scope, configs);

    this.vpcId = this.configs.vpcId;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;
}