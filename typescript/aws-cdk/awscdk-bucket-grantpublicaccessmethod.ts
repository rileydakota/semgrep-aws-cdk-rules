import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket1 = new s3.Bucket(this, 'bucket')
    console.log('something unrelated')
    publicBucket1.grantPublicAccess()

    // ruleid:awscdk-bucket-grantpublicaccessmethod
    const publicBucket2 = new s3.Bucket(this, 'bucket')
    publicBucket2.grantPublicAccess()

    // ok:awscdk-bucket-grantpublicaccessmethod
    const nonPublicBucket = new s3.Bucket(this, 'bucket')
  }
}
