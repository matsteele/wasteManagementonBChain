import React from "react";
import {
  Button,
  Dropdown,
  Header,
  Icon,
  Modal,
  Input,
  Label
} from "semantic-ui-react";

const options = [
  { key: "metal", text: "metal", value: "metal" },
  { key: "hazzardous", text: "hazzardous", value: "hazzardous" },
  { key: "dry", text: "dry", value: "dry" },
  { key: "wet", text: "wet", value: "wet" }
];

class ModalBasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      trashType: "",
      amountPaid: "",
      trashTypes: {
        metal: 60,
        hazardous: 50,
        dry: 30,
        wet: 10
      },
      trashTypesConversion: {
        0: "metal",
        1: "hazardous",
        2: "dry",
        3: "wet"
      }
    };
  }

  componentDidMount() {
    this.setState({
      weight: this.getWeight(),
      amountPaid: this.sumTrash(),
      date: Date.now()
    });
  }

  handleObject = () => {
    let i = Math.floor(Math.random() * 31);

    const object = {
      date: "9/" + i + "/19",
      weight: this.getWeight(),
      credit: this.sumTrash()
    };
    this.props.handleClick(object);
  };

  getWeight = () => {
    return Math.floor(Math.random() * 10);
  };

  getTrashType = () => {
    let num = Math.floor(Math.random() * 4);
    return this.state.trashTypes[this.state.trashTypesConversion[num]];
  };
  getTrashValue = () => {
    return this.state.trashTypes[this.state.trashType];
  };
  sumTrash = () => {
    return this.getWeight() * this.getTrashType();
  };

  render() {
    console.log(this.trashTypes);
    return (
      <Modal trigger={<p>make claim </p>} basic size="small">
        <Header icon="archive" content="make a trash claim" />
        <Modal.Content>
          <p>
            input weight of trash and receive credit to spend with collaborating
            sponsors
          </p>
          <br />
          <Input
            label="weight"
            labelPosition="right"
            value={this.getWeight()}
          />
          <br />
          <br />
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="trash"
            options={options}
            search
            text="trash type"
          />

          <br />
          <br />
          <Label>
            amount paid
            <Label.Detail>{this.sumTrash()}</Label.Detail>
          </Label>
          <br />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={() => this.handleObject()}>
            <Icon name="checkmark" /> submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalBasicExample;
