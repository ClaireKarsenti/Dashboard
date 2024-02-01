import { SiteConfig } from '@/src/lib/site-config';

describe('SiteConfig', () => {
  it('has the correct title', () => {
    expect(SiteConfig.title).toEqual('CK Next.js Dashboard');
  });

  it('has the correct description', () => {
    expect(SiteConfig.description).toEqual(
      'This is my Next.js Admin Dashboard project'
    );
  });
});
