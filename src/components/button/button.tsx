import * as React from 'react';
import styled from "styled-components";
import {color, screenSizes} from "../../theme";
import {observer} from "mobx-react-lite";
import {useStores} from "../../store";
import {useHistory} from "react-router-dom";

export const StyledButton = styled.button`
    width: fit-content;
    height: fit-content;
    border: 2px solid ${color.palette.white};
    border-radius: 3px;
    cursor: pointer;
    padding: 16px;
    color: ${color.palette.white};
    background-color: ${color.transparent};
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    outline: none;
    opacity: ${(props) => props.disabled ? 0.4 : 1};
    @media screen and (max-width: ${screenSizes[1]}) {
      padding: 8px;
    }
  `

interface Props {
  onClick?: () => void;
  className?: string;
  label?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  goTo?: string;
  fetchResponsive?: boolean;
}
export const Button = observer(function Button(props: Props) {
  const history = useHistory();
  const {global} = useStores();
  const {label, className, disabled, onClick, children, goTo, fetchResponsive = true, ...rest} = props;

  const navigateTo = (path: string) => history.push(path);

  const action = async () => {
    try {
      global.setLoading(true);
      onClick && (await onClick());
      !!goTo && navigateTo(goTo);
    } catch(e) {
      console.log(e)
    } finally {
      global.setLoading(false);
    }
  }

  const content = label ? <span>{label}</span> : children;

  return (
    <StyledButton onClick={action} disabled={disabled || global.isLoading} className={className} {...rest}>
      {content}
    </StyledButton>
  );
});
