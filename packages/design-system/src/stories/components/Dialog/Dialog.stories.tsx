import React, { useState } from "react";
import { Box } from "@mui/material";
import Error from "@lunit/design-system-icons/Error";

import Button from "../../../components/Button";

import { Dialog, DialogContent } from "../../../components/Dialog";

import type { Meta, StoryObj } from "@storybook/react";
import { variants } from "../../foundation/Typography/const";

const meta: Meta<typeof Dialog> = {
  title: "components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: { disable: true, hidden: true },
  },
  argTypes: {
    onClose: { action: "onClose" },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const PassiveModal: Story = {
  name: "Type: passive modal",
  render: function PassiveModalRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div ref={(ref) => setTarget(ref)} />
        <Dialog
          className={classNameFromGlobal}
          isOpen={Boolean(target)}
          onClose={close}
          type="passive"
          title="Title area"
          isSmall
        >
          <DialogContent>
            Lorem Ipsum is simply dummy text of the a printing and typesetting
            industry
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const ActionModal: Story = {
  name: "Type: action modal",
  render: function ActionModalRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div ref={(ref) => setTarget(ref)} />
        <Dialog
          className={classNameFromGlobal}
          isOpen={Boolean(target)}
          onClose={close}
          isSmall
          type="action"
          title="Title area"
          actions={
            <>
              <Button
                kind="ghost"
                color="secondary"
                size="medium"
                onClick={close}
              >
                Cancel
              </Button>
              <Button kind="contained" size="medium" onClick={close}>
                Save
              </Button>
            </>
          }
        >
          <DialogContent>
            Lorem Ipsum is simply dummy text of the a printing and typesetting
            industry
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const NonModal: Story = {
  name: "Type: non modal",
  render: function NonModalRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [isOpen, setIsOpen] = useState(false);
    function open() {
      setIsOpen(true);
    }

    function close() {
      setIsOpen(false);
    }

    return (
      <>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <Button kind="contained" size="medium" onClick={open}>
            Open to see Dialog
          </Button>
          <Button kind="contained" size="medium" onClick={close}>
            click to close Dialog
          </Button>
        </Box>

        <Dialog
          className={classNameFromGlobal}
          isOpen={isOpen}
          isModal={false}
          type="action"
          isSmall
          onClose={close}
          title="Title area"
          actions={
            <>
              <Button
                kind="ghost"
                color="secondary"
                size="medium"
                onClick={close}
              >
                Cancel
              </Button>
              <Button kind="contained" size="medium" onClick={close}>
                Save
              </Button>
            </>
          }
        >
          <DialogContent>
            Lorem Ipsum is simply dummy text of the a printing and typesetting
            industry
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const SmallFalse: Story = {
  name: "Option: small false",
  render: function SmallFalseRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div ref={(ref) => setTarget(ref)} />
        <Dialog
          className={classNameFromGlobal}
          isOpen={Boolean(target)}
          type="passive"
          onClose={close}
          title="Title area"
          isSmall={false}
        >
          <DialogContent>
            Lorem Ipsum is simply dummy text of the a printing and typesetting
            industry
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const WithTitleIcon: Story = {
  name: "Option: title icon",
  render: function WithTitleIconRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div ref={(ref) => setTarget(ref)} />
        <Dialog
          className={classNameFromGlobal}
          isOpen={Boolean(target)}
          isSmall
          type="action"
          onClose={close}
          title="Title area"
          titleIcon={<Error color="error" variant="filled" />}
          actions={
            <>
              <Button
                kind="ghost"
                color="secondary"
                size="medium"
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                kind="contained"
                color="error"
                size="medium"
                onClick={close}
              >
                Confirm
              </Button>
            </>
          }
        >
          <DialogContent>
            Lorem Ipsum is simply dummy text of the a printing and typesetting
            industry
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const WithCustomStyle: Story = {
  name: "Option: custom style",
  render: function WithCustomStyleRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div ref={(ref) => setTarget(ref)} />
        <Dialog
          className={classNameFromGlobal}
          isOpen={Boolean(target)}
          isSmall
          type="passive"
          onClose={close}
          title="Title area"
          sx={{
            "& .dialog-title-wrapper": {
              border: "4px dashed red",
              borderRadius: "10px",
              backgroundColor: "green",
            },
          }}
        >
          <DialogContent>
            Lorem Ipsum is simply dummy text of the a printing and typesetting
            industry
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const WithScroll: Story = {
  name: "Option: with scroll",
  render: function WithScrollRender(_Story, context) {
    const classNameFromGlobal = context.globals.theme;
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div ref={(ref) => setTarget(ref)} />
        <Dialog
          className={classNameFromGlobal}
          isOpen={Boolean(target)}
          isSmall
          type="action"
          onClose={close}
          title="Title area"
          actions={
            <>
              <Button
                kind="ghost"
                color="secondary"
                size="medium"
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                kind="contained"
                color="error"
                size="medium"
                onClick={close}
              >
                Confirm
              </Button>
            </>
          }
        >
          <DialogContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            suscipit at. Atque enim, hic architecto sequi libero deserunt
            dolores omnis, cumque dignissimos ab animi. Recusandae saepe facere
            error tempore quasi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur eius commodi deserunt reiciendis.
            Officia veniam consequuntur doloribus debitis numquam ipsum autem,
            eos repellendus eligendi esse voluptatum natus, cum optio? Unde!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            praesentium incidunt tempora quam aut nulla corrupti ipsa voluptatem
            vitae soluta ex officia, explicabo, voluptate porro. Eius mollitia
            veritatis corporis neque. Lorem Ipsum is simply dummy text of the a
            printing and typesetting industry Lorem ipsum dolor sit amet
            consectetur Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quis, suscipit at. Atque enim, hic architecto sequi libero
            deserunt dolores omnis, cumque dignissimos ab animi. Recusandae
            saepe facere error tempore quasi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur eius commodi deserunt
            reiciendis. Officia veniam consequuntur doloribus debitis numquam
            ipsum autem, eos repellendus eligendi esse voluptatum natus, cum
            optio? Unde! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam praesentium incidunt tempora quam aut nulla corrupti
            ipsa voluptatem vitae soluta ex officia, explicabo, voluptate porro.
            Eius mollitia veritatis corporis neque. Lorem Ipsum is simply dummy
            text of the a printing and typesetting industry Lorem ipsum dolor
            sit amet consectetur Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quis, suscipit at. Atque enim, hic architecto
            sequi libero deserunt dolores omnis, cumque dignissimos ab animi.
            Recusandae saepe facere error tempore quasi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur eius commodi deserunt
            reiciendis. Officia veniam consequuntur doloribus debitis numquam
            ipsum autem, eos repellendus eligendi esse voluptatum natus, cum
            optio? Unde! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam praesentium incidunt tempora quam aut nulla corrupti
            ipsa voluptatem vitae soluta ex officia, explicabo, voluptate porro.
            Eius mollitia veritatis corporis neque. Lorem Ipsum is simply dummy
            text of the a printing and typesetting industry Lorem ipsum dolor
            sit amet consectetur
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
