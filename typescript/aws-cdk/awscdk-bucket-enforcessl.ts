import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // ruleid:aws-cdk-bucket-enforcessl
    const badBucket = new s3.Bucket(this, 's3-bucket-bad')
    // ok:aws-cdk-bucket-enforcessl
    const AnotherGoodBucket = new s3.Bucket(this, 's3-bucket', {
      enforceSSL: true
    })
    // ruleid:aws-cdk-bucket-enforcessl
    const badBucket2 = new s3.Bucket(this, 's3-bucket-bad', {
      enforceSSL: false
     })
  }
}
