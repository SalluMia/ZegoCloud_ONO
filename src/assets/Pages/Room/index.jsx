import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function RoomPage() {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const appId = 974114691;
    const serverSecret = "e2e7ee96c7b39e16a2c6d2923484d411";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Suleman");
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: meetingRef.current,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`
        }
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false
    });
  }, [roomId]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div ref={meetingRef} className='w-4/5 h-4/5 py-10'></div>
    </div>
  );
}

export default RoomPage;
