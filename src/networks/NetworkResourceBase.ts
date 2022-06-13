import { Construct, ec2 } from 'lib/aws';

/**
 * ネットワークリソースベースクラス
 */
export default abstract class NetworkResourceBase {

  /** @type {string} id */
  protected id: string;
  /** @type {string} 名前 */
  protected name: string;
  /** @type {Construct} スコープ */
  protected scope: Construct;
  /** @type {any} 設定 */
  protected configs: any;

/**
 * コンストラクタ
 * @param {string} name 名前
 * @param {Construct} scope スコープ
 * @param {any} configs 設定群
 */
  constructor(name: string, scope: Construct, configs: any) {
    this.name = name;
    this.scope = scope;
    this.configs = configs;
  }

  /**
   * ネットワークリソースを作成
   * @return {void}
   */
  abstract createNetworkResource(): void;

  /**
   * idを取得
   * @return {string}
   */
  abstract getId(): string;
}