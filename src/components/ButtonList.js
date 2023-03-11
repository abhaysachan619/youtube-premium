import React from 'react'
import Button from './Button'

//const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="WWE"/>
      <Button name="UFC"/>
      <Button name="UEFA"/>
      <Button name="Testing"/>  
    </div>
  );
};

export default ButtonList;