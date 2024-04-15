import React, { useState } from "react";
import { Box, SvgIcon } from "@mui/material";

import Button from "../../../components/Button";

import { Dialog, DialogTitle, DialogContent } from "../../../components/Dialog";

import type { Meta, StoryObj } from "@storybook/react";
import type { SvgIconProps } from "@mui/material";

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

function ErrorIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.69511 0.760553C9.26962 -0.253521 10.7304 -0.253515 11.3049 0.760555L19.8029 15.7604C20.3694 16.7604 19.6472 18 18.498 18H1.50202C0.352832 18 -0.369418 16.7604 0.197127 15.7604L8.69511 0.760553ZM9.99507 5.99975C10.4092 5.99975 10.745 6.33555 10.745 6.74979V11.2501C10.745 11.6643 10.4092 12.0001 9.99507 12.0001C9.5809 12.0001 9.24516 11.6643 9.24516 11.2501V6.74979C9.24516 6.33555 9.5809 5.99975 9.99507 5.99975ZM10.9919 13.9997C10.9919 14.5521 10.5442 14.9998 9.99202 14.9998C9.4398 14.9998 8.99214 14.5521 8.99214 13.9997C8.99214 13.4474 9.4398 12.9997 9.99202 12.9997C10.5442 12.9997 10.9919 13.4474 10.9919 13.9997Z"
        fill="#FA464F"
      />
    </SvgIcon>
  );
}

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
          modalType="passive"
          isSmall
        >
          <DialogTitle title="Title area" onClose={close} />
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
          modalType="action"
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
          <DialogTitle title="Title area" />
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
          modalType="nonModal"
          isOpen={isOpen}
          isSmall
          onClose={close}
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
          <DialogTitle title="Title area" />
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
          modalType="passive"
          onClose={close}
        >
          <DialogTitle title="Title area" onClose={close} />
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
          modalType="action"
          onClose={close}
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
          <DialogTitle title="Title area" icon={<ErrorIcon />} />
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
          modalType="passive"
          onClose={close}
          sx={{
            "& .dialog-title-wrapper": {
              border: "4px dashed red",
              borderRadius: "10px",
              backgroundColor: "green",
            },
          }}
        >
          <DialogTitle title="Title area" onClose={close} />
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
          modalType="action"
          onClose={close}
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
          <DialogTitle title="Title area" />
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
