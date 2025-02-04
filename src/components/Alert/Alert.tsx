import Swal from "sweetalert2";
import { AlertError } from "../StyledComponents";

export interface AlertOptions {
  title?: string;
  text?: string;
  icon?: "success" | "error" | "warning" | "info" | "question";
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  message?: string;
  titleMessage?: string;
}
export const showAlert = (options: AlertOptions) => {
  return Swal.fire({
    title: options.title || "Are you sure?",
    text: options.text || "You won't be able to revert this!",
    icon: options.icon || "warning",
    showCancelButton: options.showCancelButton || false,
    confirmButtonColor: options.confirmButtonColor || "#3085d6",
    cancelButtonColor: options.cancelButtonColor || "#d33",
    confirmButtonText: options.confirmButtonText || "Yes",
    cancelButtonText: options.cancelButtonText || "Cancel",
  });
};

export const AlertDanger: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AlertError>{children}</AlertError>;
};
