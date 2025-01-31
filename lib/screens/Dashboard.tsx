import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Header, Item, Input as InputNative, Button } from "native-base";
import { colors, heightRatio } from "xdemic/lib/styles/globalStyles";

import {
  Screen,
  Container,
  Text,
  Card,
  Credential,
  Theme,
  Colors,
  Icon,
  SignPost,
  SignPostCardType,
  Section
} from "@kancha";
import SCREENS from "./Screens";
import BaseCard from "xdemic/lib/components/shared/BaseCard";
import BaseChip from "xdemic/lib/components/shared/BaseChip";
import { parseClaimItem } from "xdemic/lib/utilities/parseClaims";
import { onlyLatestAttestationsWithIssuer } from "xdemic/lib/selectors/attestations";
import dataJson from "xdemic/lib/stubbs/signposts";
import config from "xdemic/lib/config";

interface DashboardProps {
  credentials: any[];
  componentId: string;
  signPosts: any[];
}

export const Dashboard: React.FC<DashboardProps> = props => {
  const [signPosts, updateSignPosts] = useState([]);
  const fetchSignPosts = async () => {
    const response = await fetch(
      "https://uport-mobile-store.s3.us-east-2.amazonaws.com/dashboard-signposts/signposts.json"
    );
    const json = await response.json();
    // updateSignPosts(dataJson);
    updateSignPosts(json);
  };
  const showSignPosts =
    signPosts.length > 0 &&
    props.credentials.length === 0 &&
    signPosts.map((card: SignPostCardType) => {
      return <SignPost key={card.id} card={card} />;
    });

  useEffect(() => {
    fetchSignPosts();
  }, []);

  const showCredentials = props.credentials.map(credential => {
    const { claimCardHeader } = parseClaimItem(credential);

    return (
      <Container key={credential.token} marginBottom>
        <Credential
          componentId={props.componentId}
          screen={SCREENS.Credential}
          verification={credential}
          claimType={claimCardHeader}
          issuer={credential.issuer}
          noMargin
        />
      </Container>
    );
  });
  return (
    <Screen>
      <Container>
        <Container
          flex={1}
          justifyContent={"center"}
          paddingLeft={16}
          paddingRight={16}
        >
          <Container>
            <Item style={Styles.input}>
              <Icon
                name={"search"}
                font={"feather"}
                color={Colors.LIGHT_GREY}
                size={20}
              />
              <InputNative
                style={{ fontSize: 14, color: Colors.LIGHT_GREY }}
                placeholder="Search..."
              />
            </Item>
          </Container>
          <Container>
            <Text
              type={Text.Types.H5}
              textAlign={"left"}
              textColor={Colors.BLACK}
              bold
              paddingTop={32}
              paddingBottom={13}
            >
              Search Result
            </Text>
            {config.dummyData.BaseCardData.map((data: any, i: any) => {
              return (
                <BaseCard
                  {...props}
                  data={{ ...data, expandable: false }}
                  key={i}
                />
              );
            })}
          </Container>
        </Container>
        <Container flexDirection={"column"} paddingLeft={16} paddingRight={16}>
          <Container>
            <Text
              type={Text.Types.H5}
              textAlign={"left"}
              textColor={Colors.BLACK}
              bold
              paddingTop={29}
              paddingBottom={13}
            >
              Near You
            </Text>
            {config.dummyData.BaseCardData.map((data: any, i: any) => {
              return (
                <BaseCard
                  {...props}
                  data={{ ...data, expandable: false }}
                  key={i}
                />
              );
            })}
          </Container>
        </Container>
        <Section title={"NEW CREDENTIALS"}>
          <Container marginBottom>
            <Credential
              claimType={"Standard Credential"}
              issuer={{
                name: "xDemic Apps Team",
                avatar: {
                  uri:
                    "https://cloudflare-ipfs.com/ipfs/QmdxTrTSiQGY8GzY2wLJzWcuRcV3jKfLjFGWnc3fsUk1bK"
                }
              }}
            />
          </Container>
          <Container marginBottom>
            <Credential
              claimType={"Missing Credential"}
              issuer={{ name: "xDemic Apps Team" }}
              missing
              spec={{}}
            />
          </Container>
        </Section>
      </Container>
    </Screen>
  );
};

const mapStateToProps = (state: any) => {
  return {
    credentials: onlyLatestAttestationsWithIssuer(state)
  };
};

export default connect(mapStateToProps)(Dashboard);

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingLeft: 20,
    height: 40
  }
});
