import { Construct, ec2 } from 'lib/aws';
import NetworkResourceBase from 'src/networks/networkResourceBase';

/**
 * ルートベースクラス
 */
export default abstract class RouteBase extends NetworkResourceBase {

  /** @type {CfnVPC} ルートインスタンス */
  protected route: ec2.CfnRoute;
  /** @type {string} ルートテーブルId */
  protected routeTableId: string;

  /**
   * コンストラクタ
   * @param {string} routeName ルート名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定群
   */
  constructor(routeName: string, scope: Construct, configs: any) {
    super(routeName, scope, configs);
    
    this.routeTableId = this.configs.routeTableId;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;
}