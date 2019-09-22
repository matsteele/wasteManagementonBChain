import React from "react";
import JobCoinLogo from "../../assets/job_coin_logo";
import ClaimModal from "./claim_modal";
import reciepts from "../../Api";
import { navigate } from "hookrouter";
import {
  Container,
  Divider,
  Header,
  Table,
  List,
  Menu,
  Label,
  Segment
} from "semantic-ui-react";

class FixedMenuLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reciepts: reciepts,
      object: {
        date: "",
        weight: "",
        credit: ""
      }
    };
  }

  handleClick = object => {
    console.log(object);
    this.setState({
      object,
      reciepts: [...this.state.reciepts, object]
    });
  };

  handleBalance = () => {
    let balance;
    this.state.reciepts.map(amount => (balance += amount.credit));
    return balance;
  };
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <JobCoinLogo
                dashboard={false}
                scale={25}
                backgroundColor={"white"}
                emphasisColor={"red"}
              />
            </Menu.Item>
            <Menu.Item as="a" color="red">
              <ClaimModal handleClick={this.handleClick} />
            </Menu.Item>
            <Menu.Item as="a" href="/" color="red" position="right">
              log out
            </Menu.Item>
          </Container>
        </Menu>

        <Container text style={{ marginTop: "7em" }}>
          <Header as="h1">PROFILE</Header>

          <Label>
            credit balance
            <Label.Detail>300.50</Label.Detail>
          </Label>
          <p>below is a list of recent transactions</p>
          <Table definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>weight</Table.HeaderCell>
                <Table.HeaderCell>credit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.reciepts.map((record, idx) => {
                return (
                  <Table.Row key={idx}>
                    <Table.Cell>{record.date}</Table.Cell>
                    <Table.Cell>{record.weight}.00L</Table.Cell>
                    <Table.Cell>${record.credit}.00</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Divider inverted section />
            <JobCoinLogo
              dashboard={false}
              scale={25}
              backgroundColor={"white"}
              emphasisColor={"red"}
            />
            <br />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default FixedMenuLayout;
