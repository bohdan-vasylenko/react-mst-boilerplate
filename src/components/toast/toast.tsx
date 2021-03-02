import * as React from "react";
import styled from "styled-components";
import {ToastContainer} from "react-toastify";

const ToastInstance = styled(ToastContainer)`
    max-width: 666px;
    width: 100%;
    margin-top: 70px;
    text-align: center;
    padding: 10px;
`

export function Toast() {
  return <ToastInstance position={'top-center'} autoClose={5000} hideProgressBar/>
}
