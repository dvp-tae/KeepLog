import Text from "@/components/common/Text";
import Wrapper from "@/components/layout/Wrapper";
import * as S from "@/features/layout/styles/LayoutShell.styles";

const Footer = () => {
  return (
    <S.Footer>
      <Wrapper maxWidth={768} center>
        <S.FooterInner>
          <Text variant="body" color="muted">
            &copy; {new Date().getFullYear()} KeepLog. All rights reserved.
          </Text>
        </S.FooterInner>
      </Wrapper>
    </S.Footer>
  );
};

export default Footer;
