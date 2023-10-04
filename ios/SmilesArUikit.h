
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSmilesArUikitSpec.h"

@interface SmilesArUikit : NSObject <NativeSmilesArUikitSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SmilesArUikit : NSObject <RCTBridgeModule>
#endif

@end
