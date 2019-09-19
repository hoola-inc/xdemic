// *Example of Collapsible - Accordion - Expandable View in React Native*/
import React, { Component } from "react";
//import react in our project
import { StyleSheet, Text } from "react-native";
//import basic react native components
import * as Animatable from "react-native-animatable";

import { Theme, Card } from "@kancha";
import DataCard from "xdemic/lib/components/shared/DataCard";
import CardCollapsibleHeader from "xdemic/lib/components/shared/CardCollapsibleHeader";

export default class BaseCollapsible extends Component {
  state = {
    //default active selector
    activeSections: [],
    //collapsed condition for the single collapsible
    collapsed: true,
    //multipleSelect is for the Multiple Expand allowed
    //true: You can expand multiple at a time
    //false: One can be expand at a time and other will be closed automatically
    multipleSelect: false
  };

  toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections
    });
  };

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text
          animation={isActive ? "bounceIn" : undefined}
          style={{ textAlign: "center" }}
        >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    const {
      name,
      uri,
      courseCode,
      courseGrade,
      courseGPA,
      coursePercentage,
      schoolName
    } = this.props.data;
    console.log("this.props in BaseCollapsible card is: ", this.props.data);
    return (
      <Card onPress={this.toggleExpanded} borderLeft={!this.state.collapsed}>
        {/*Code for Single Collapsible Start*/}

        <CardCollapsibleHeader
          name={name}
          subTitle={this.state.collapsed ? "" : schoolName}
          schoolPosition={courseCode}
          detailed={true}
          collapsed={!this.state.collapsed}
        >
          {!this.state.collapsed && (
            <DataCard
              {...this.props}
              data={{
                ranking: courseGPA,
                enrollment: coursePercentage,
                deadline: courseGrade
              }}
              cardOptions={["GPA", "PERCENTAGE", "GRADE"]}
            />
          )}
        </CardCollapsibleHeader>
        {/*Code for Single Collapsible end */}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 30
  },
  title: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20,
    color: "blue"
  },
  header: {
    backgroundColor: "transparent",
    padding: 0
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "500",
    color: Theme.colors.primary.brand
  },
  content: {
    padding: 0,
    // margin: "-10",
    backgroundColor: "black"
  },
  active: {
    // backgroundColor: "black"
  },
  inactive: {
    backgroundColor: "transparent"
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  selector: {
    backgroundColor: "transparent",
    padding: 0
  },
  activeSelector: {
    fontWeight: "bold"
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 0,
    textAlign: "left"
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center"
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8
  }
});