import { Construct, ec2 } from 'lib/aws';
import RouteBase from './routeBase';

/**
 * ルートクラス
 */
export default class DefaultRoute extends RouteBase {

  /** @type {boolean} 宛先CIDRブロック */
  private destinationCidrBlock: string;
  /** @type {string} インターネットゲートウェイId */
  private igwId: string;

  /**
   * コンストラクタ
   * @param {string} routeName ルート名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定
   */
  constructor(routeName: string, scope: Construct, configs: any = {}) {
    const destinationCidrBlock = '0.0.0.0/0';

    const defaultConfigs = {
      destinationCidrBlock: destinationCidrBlock,
      tags: [{
        key: 'Name',
        value: routeName
      }]
    };
    configs = Object.assign(defaultConfigs, configs);

    super(routeName, scope, configs);

    this.destinationCidrBlock = destinationCidrBlock;
    this.createNetworkResource();
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  createNetworkResource(): void {
    this.route = new ec2.CfnRoute(this.scope, this.name, this.configs);
    this.id = this.route.ref;
  }

  /**
   * idを取得
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }
}