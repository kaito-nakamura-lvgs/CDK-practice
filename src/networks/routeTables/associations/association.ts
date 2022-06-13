import { Construct, ec2 } from 'lib/aws';
import AssociationBase from './associationBase';

/**
 * アソシエーションクラス
 */
export default class Association extends AssociationBase {

  /**
   * コンストラクタ
   * @param {string} associationName アソシエーション名
   * @param {Construct} scope スコープ
   * @param {any} configs 設定
   */
  constructor(associationName: string, scope: Construct, configs: any = {}) {
    const defaultConfigs = {
      tags: [{
        key: 'Name',
        value: associationName
      }]
    };
    configs = Object.assign(defaultConfigs, configs);

    super(associationName, scope, configs);

    this.createNetworkResource();
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  createNetworkResource(): void {
    this.association = new ec2.CfnSubnetRouteTableAssociation(this.scope, this.name, this.configs);
    this.id = this.association.ref;
  }

  /**
   * idを取得
   * @return {string}
   */
  public getId(): string {
    return this.id;
  }
}