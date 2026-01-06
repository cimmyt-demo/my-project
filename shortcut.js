// Configuration for keyboard shortcuts
const SHORTCUTS = {
  PREVIOUS_PAGE: 'ArrowLeft',
  NEXT_PAGE: 'ArrowRight',
  CLOSE: 'Escape',
  HELP: '?'
};

class PreviewDialog {
  constructor(dialogId) {
    this.dialog = document.getElementById(dialogId);
    this.focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.firstFocusable = null;
    this.lastFocusable = null;
    
    this.init();
  }

  init() {
    // Select all focusable elements to manage the "Tab Trap"
    const elements = this.dialog.querySelectorAll(this.focusableElements);
    this.firstFocusable = elements[0];
    this.lastFocusable = elements[elements.length - 1];

    this.addEventListeners();
  }

  addEventListeners() {
    this.dialog.addEventListener('keydown', (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    // 1. Handle Tab Trapping
    if (e.key === 'Tab') {
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        }
      } else { // Tab
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }

    // 2. Handle Navigation Shortcuts
    switch (e.key) {
      case SHORTCUTS.CLOSE:
        this.closeDialog();
        break;
      case SHORTCUTS.NEXT_PAGE:
        this.changePage('next');
        break;
      case SHORTCUTS.PREVIOUS_PAGE:
        this.changePage('prev');
        break;
      case SHORTCUTS.HELP:
        this.toggleHelpOverlay();
        break;
    }
  }

  changePage(direction) {
    console.log(`Navigating to ${direction} page...`);
    // Logic to update preview content goes here
  }

  toggleHelpOverlay() {
    console.log("Showing keyboard shortcuts: Arrows to navigate, Esc to close.");
    // Logic to show your accessibility help overlay
  }

  closeDialog() {
    this.dialog.setAttribute('aria-hidden', 'true');
    this.dialog.style.display = 'none';
    console.log("Dialog closed.");
  }
}

// Initialize the dialog
const preview = new PreviewDialog('preview-modal');
