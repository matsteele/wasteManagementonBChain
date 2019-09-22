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
  { key: "wet", text: "wet", value: "wet" },
];

const ModalBasicExample = () => (
  <Modal trigger={<p>make claim </p>} basic size="small">
    <Header icon="archive" content="make a trash claim" />
    <Modal.Content>
      <p>
        input weight of trash and receive credit to spend with collaborating
        sponsors
      </p>
      <br />
      <Input label="weight" labelPosition="right" />
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
        <Label.Detail>214.43</Label.Detail>
      </Label>
      <br />
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" inverted>
        <Icon name="checkmark" /> submit
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalBasicExample;
