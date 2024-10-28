import Layout from './Layout/Layout'

const App = () => {
  // const [_, setOpen] = useAtom(dropzoneOverlayAtom)
  
  // useEffect(() => {
  //   let isDragging = false;

  //   const handleDragEnter = () => {
  //     if (!isDragging) {
  //       setOpen(true);
  //       isDragging = true;
  //     }
  //   };

  //   const handleDragLeave = () => {
  //     // This will be called when the drag leaves the viewport
  //     if (isDragging) {
  //       setOpen(false);
  //       isDragging = false;
  //     }
  //   };

  //   const handleDragOver = (event: DragEvent) => {
  //     event.preventDefault(); // Prevent default to allow drop
  //     handleDragEnter();
  //   };

  //   const handleDragEnd = () => {
  //     // Reset when drag ends
  //     if (isDragging) {
  //       setOpen(false);
  //       isDragging = false;
  //     }
  //   };

  //   document.addEventListener('dragenter', handleDragEnter);
  //   document.addEventListener('dragleave', handleDragLeave);
  //   document.addEventListener('dragover', handleDragOver);
  //   document.addEventListener('dragend', handleDragEnd);

  //   return () => {
  //     document.removeEventListener('dragenter', handleDragEnter);
  //     document.removeEventListener('dragleave', handleDragLeave);
  //     document.removeEventListener('dragover', handleDragOver);
  //     document.removeEventListener('dragend', handleDragEnd);
  //   };
  // }, []);
  
  return <Layout />
}

export default App
