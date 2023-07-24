import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/* Set sweet alert toast */
const SwalToast = withReactContent(Swal).mixin({
  toast: true,
  position: "top-end",
  timer: 2500,
  timerProgressBar: true,
  buttonsStyling: false,
  showConfirmButton: false,
  title: "Information",
  icon: "info",
  didOpen: toast => {
    toast.addEventListener("mouseenter", SwalToast.stopTimer);
    toast.addEventListener("mouseleave", SwalToast.resumeTimer);
  }
});

/* Set sweet alert modals */
const SwalAlert = withReactContent(Swal).mixin({
  customClass: {
    confirmButton: "btn btn-md btn-swal-confirm",
    cancelButton: "btn btn-md btn-swal-cancel"
  },
  title: "Information",
  icon: "info",
  buttonsStyling: false,
  heightAuto: false,
  reverseButtons: true
});

export { SwalToast, SwalAlert };
