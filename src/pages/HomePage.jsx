import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { Container, GroupBox, Title, WhiteBox } from "../assets/styles";
import GroupCard from "../components/Card/GroupCard";
import Button from "../components/Form/Button";

export default function HomePage() {
  return (
    <Container>
      <WhiteBox>
        <Header />
        <Title>Encontre seu grupo</Title>
        <GroupBox>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <Button>Criar grupo</Button>
        </GroupBox>
      </WhiteBox>
    </Container>
  );
}
