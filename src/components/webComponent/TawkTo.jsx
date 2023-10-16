import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from "react";
import toast from "react-hot-toast";

const TawkTo = ({ email, name, user_id }) => {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    tawkMessengerRef.current.visitor({
      name: name,
      email: email,
    });

    tawkMessengerRef.current.setAttributes(
      {
        id: user_id,
        store: "test",
      },
      function (error) {
        toast("Previous Chat Unavailable");
      }
    );
  };

  return (
    <>
      <TawkMessengerReact
        ref={tawkMessengerRef}
        propertyId={import.meta.env.VITE_TAWK_TO_PROPERTY_ID}
        widgetId={import.meta.env.VITE_TAWK_TO_WIDGET_ID}
        onLoad={onLoad}
        customStyle={{ zIndex: "10000 !important" }}
        onChatMessageAgent={(msg) => {
          toast("New Message From Doctor");
        }}
        onAgentJoinChat={(data) => {
          toast("A doctor has joined the chat");
        }}
      />
    </>
  );
};

export default TawkTo;
