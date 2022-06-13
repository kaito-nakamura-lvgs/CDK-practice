import { Construct, ec2 } from 'lib/aws';
import RouteTableBase from './routeTableBase';

/**
 * ルートテーブルクラス
 */
export default class RouteTable extends RouteTableBase {

  /**
   * コンストラクタ
   * @param {string} routeTableName ルートテーブル名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定
   */
  constructor(routeTableName: string, scope: Construct, configs: any = {}) {
    const defaultConfigs = {
      tags: [{
        key: 'Name',
        value: routeTableName
      }]
    };
    configs = Object.assign(defaultConfigs, configs);

    super(routeTableName, scope, configs);

    this.createNetworkResource();
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  createNetworkResource(): void {
    this.routeTable = new ec2.CfnRouteTable(this.scope, this.name, this.configs);
    this.id = this.routeTable.ref;
  }

  /**
   * idを取得
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }
}