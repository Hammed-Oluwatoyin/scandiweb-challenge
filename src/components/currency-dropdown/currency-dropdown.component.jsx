import React, {Component} from "react";
import styled from "styled-components";


const CurrencyContainer = styled.div`
    position: absolute;
    width: 144px;
    height: 190px;
    background-color:#ffffff ;
    
    top: 80px;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
`

const CurrencyItem = styled.div`
        font-size: 18px;
        font-weight: 500;
        line-height: 28.8px;
        padding: 10px;
        background-color: ${(p) => (p.isActive ? "rgba(0, 0, 0, 0.2)" : "null")};
        
         &:hover {
             background-color: rgba(0, 0, 0, 0.2);;
  }
    `


class CurrencyDropdown extends Component  {

   


   renderedOptions = this.props.options.map((option, i) => {
       return(
           <CurrencyItem  key={option.value}   isActive={i === this.props.selectedIndex}
           onClick={(event) => this.props.onSelectedCurrencyChange(option, event, i)}>
                {option.element}
           </CurrencyItem>
       );
   });
  
    render() {
        return (
            <CurrencyContainer>
                
            
             {this.renderedOptions}
            
            </CurrencyContainer>
        )
    }

 
}


export default  CurrencyDropdown;