import { Construct, ec2 } from 'lib/aws';
import NetworkResourceBase from 'src/networks/networkResourceBase';

/**
 * アソシエーションベースクラス
 */
export default abstract class AssociationBase extends NetworkResourceBase {

  /** @type {CfnSubnetRouteTableAssociation} アソシエーションインスタンス */
  protected association: ec2.CfnSubnetRouteTableAssociation;
  /** @type {string} ルートテーブルId */
  protected routeTableId: string;
  /** @type {string} サブネットId */
  protected subnetId: string;

  /**
   * コンストラクタ
   * @param {string} associationName アソシエーション名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定群
   */
  constructor(associationName: string, scope: Construct, configs: any) {
    super(associationName, scope, configs);

    this.routeTableId = this.configs.routeTableId;
    this.subnetId = this.configs.subnetId;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;
}