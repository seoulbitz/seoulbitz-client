import ClientPortal from '../client-portal/client-portal';
import Div from '../styled-system/div/div';
import DrawerContent from './drawer-content';

const Drawer = () => {
  return (
    <ClientPortal selector="#surface-root">
      <Div
        display={['flex', null, 'none']}
        position="fixed"
        top={0}
        right={0}
        left={0}
        bottom={0}
        zIndex={100}
        backgroundColor="rgba(0, 0, 0, 0.6)"
        justifyContent={['center', 'flex-end']}
        alignItems="flex-start"
        overflowY="scroll">
        <Div
          zIndex={101}
          backgroundColor="#FFFFFF"
          width={['100%', 'initial']}
          minHeight={['100vh']}>
          <Div
            position="relative"
            display="flex"
            flexDirection="column"
            width={[null, '360px']}>
            <DrawerContent />
          </Div>
        </Div>
      </Div>
    </ClientPortal>
  );
};

export default Drawer;
