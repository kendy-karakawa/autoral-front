import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { Container, GroupBox, Title, WhiteBox } from "../assets/styles";
import GroupCard from "../components/Card/GroupCard";

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

        </GroupBox>
      </WhiteBox>
    </Container>
  );
}
