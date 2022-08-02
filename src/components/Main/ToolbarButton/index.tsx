import ToolbarButtonStyles from "./styles";

interface ToolbarButtonProps {
  children: React.ReactNode;
  onMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
}

function ToolbarButton({ children, active, onMouseDown }: ToolbarButtonProps) {
  return (
    <ToolbarButtonStyles onMouseDown={onMouseDown} active={active}>
      {children}
    </ToolbarButtonStyles>
  );
}

export default ToolbarButton;
