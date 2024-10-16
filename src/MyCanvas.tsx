import {
    ResetZoomButton,
    VisCanvas,
    Zoom,
    Pan,
  } from '@h5web/lib'
export function MyCanvas() {

  return (
    <VisCanvas
      title={"Playground"}
      abscissaConfig={{ visDomain: [-10, 0], showGrid: true }}
      ordinateConfig={{ visDomain: [50, 100], showGrid: true }}
    >
      <Pan modifierKey={'Control'} />
      <Zoom />
      <ResetZoomButton />
    </VisCanvas>
  );
}
