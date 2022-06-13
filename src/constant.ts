require('dotenv').config();

/**
 * envファイルから読み込まれる定数群
 */
const constants = {
  stackName: process.env.STACK_NAME as string,
  stackTargetEnv: process.env.STACK_TARGET_ENV as string,
  stackDescription: process.env.STACK_DESCRIPTION as string,
  stackDeployAccount: process.env.STACK_DEPLOY_ACCOUNT as string,
  stackDeployRegion: process.env.STACK_DEPLOY_REGION as string,
  vpcCidrBlock: process.env.VPC_CIDR_BLOCK as string,
  vpcEnableDnsSupport: (process.env.VPC_ENABLE_DNS_SUPPORT === 'true') as boolean,
  vpcEnableDnsHostnames: (process.env.VPC_ENABLE_DNS_HOST_NAMES === 'true') as boolean,
  vpcId: process.env.VPC_ID as string,
  igwId: process.env.IGW_ID as string,
  subnetAvailablityZone: process.env.SUBNET_AVAILABILITY_ZONE as string,
  publicSubnetCidrBlock: process.env.PUBLIC_SUBNET_CIDR_BLOCK as string,
  privateSubnetCidrBlock: process.env.DB_SUBNET_CIDR_BLOCK as string,
  subnetMapPublicIpOnLaunch: (process.env.SUBNET_MAP_PUBLIC_IP_ON_LAUNCH === 'true') as boolean,
  securityGroupDescription: process.env.SECURITY_GROUP_DESCRIPTION as string,
  iamRoleName: process.env.IAM_ROLE_NAME as string,
  amiId: process.env.EC2_AMI_ID as string,
  elasticIpAddress: process.env.EC2_ELASTIC_IP_ADDRESS as string,
  dbEngine: process.env.DB_ENGINE as string,
  dbInstanceClass: process.env.DB_INSTANCE_CLASS as string,
  instanceType: process.env.EC2_INSTANCE_TYPE as string,
  domainName: process.env.DOMAIN_NAME as string,
  ttl: process.env.ROUTE53_DNS_TTL as string
};

export default constants;