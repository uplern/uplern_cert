/**
 * Configuration for different certificate templates.
 * 
 * Page Dimensions:
 * - Landscape A4: 841.89 x 595.28 points (~29.7cm x 21.0cm)
 * - Portrait A4: 595.28 x 841.89 points (~21.0cm x 29.7cm)
 * 
 * Formula for CM to PDF Points (Bottom-Left Origin):
 * - X_pt = X_cm * 28.346
 * - Y_pt = PageHeight_pt - (Y_cm * 28.346)
 */

const templateConfig = {
  common: {
    fontColor: { r: 0.05, g: 0.09, b: 0.16 },
    qrSize: 70, // Standardized compact size
    qrPos: { x: 700, y: 55 },
  },

  templates: {
    // === LANDSCAPE TEMPLATES (Height: 595.28) ===

    AP: {
      file: "AP.pdf",
      namePos: { x: 295, y: 300, size: 48, centered: false }, // X:8.75cm, Y:8.42cm
      titlePos: { x: 421, y: 220, size: 20, centered: true },
      datePos: { x: 300, y: 27, size: 12, centered: false },  // X:4.4cm, Y:18.9cm
      idPos: { x: 475, y: 27, size: 12, centered: false },    // Y extrapolated
      qrPos: { x: 380, y: 90, size: 60 },                  // X:12.77cm, Y:14.89cm
    },

    BL: {
      file: "BL.pdf",
      namePos: { x: 300, y: 300, size: 45, centered: false },  // X:1.93cm, Y:8.12cm
      titlePos: { x: 421, y: 230, size: 20, centered: true },
      datePos: { x: 330, y: 50, size: 12, centered: false },  // X:10.64cm, Y:18.36cm
      idPos: { x: 330, y: 21, size: 12, centered: false },    // Y extrapolated
      qrPos: { x: 360, y: 100, size: 70 },                  // X:16.95cm, Y:17.08cm
    },

    CA: {
      file: "CA.pdf",
      fontColor: { r: 1, g: 1, b: 1 },
      namePos: { x: 421, y: 290, size: 38, centered: true }, // Centered under 'awarded to'
      datePos: { x: 485, y: 27, size: 11, centered: false }, // More right, higher than UID
      idPos: { x: 635, y: 27, size: 11, centered: false },   // Aligned right with Date
      qrPos: { x: 230, y: 45, size: 70 },                  // Adjusted horizontally
    },

    // TA Templates (Landscape)
    TA_1: {
      file: "TA1.pdf",
      namePos: { x: 110, y: 255, size: 38, centered: false },
      titlePos: { x: 421, y: 230, size: 20, centered: true },
      datePos: { x: 320, y: 71, size: 12, centered: false },
      idPos: { x: 320, y: 41, size: 12, centered: false },
      qrPos: { x: 500, y: 45, size: 70 },
    },
    TA_2: {
      file: "TA2.pdf",
      namePos: { x: 110, y: 255, size: 38, centered: false },
      titlePos: { x: 421, y: 230, size: 20, centered: true },
      datePos: { x: 320, y: 71, size: 12, centered: false },
      idPos: { x: 320, y: 41, size: 12, centered: false },
      qrPos: { x: 500, y: 45, size: 70 },
    },
    TA_4: {
      file: "TA4.pdf",
      namePos: { x: 110, y: 255, size: 38, centered: false },
      titlePos: { x: 421, y: 230, size: 20, centered: true },
      datePos: { x: 320, y: 71, size: 12, centered: false },
      idPos: { x: 320, y: 41, size: 12, centered: false },
      qrPos: { x: 500, y: 45, size: 70 },
    },

    // === PORTRAIT TEMPLATES (Height: 841.89) ===

    EX: {
      file: "EX.pdf",
      isPortrait: false,
      namePos: { x: 430, y: 250, size: 45, centered: false },  // X:1.93cm, Y:8.12cm
      titlePos: { x: 421, y: 230, size: 20, centered: true },
      datePos: { x: 358, y: 12, size: 12, centered: false },  // X:10.64cm, Y:18.36cm
      idPos: { x: 500, y: 12, size: 12, centered: false },    // Y extrapolated
      qrPos: { x: 520, y: 50, size: 70 },                  // X:16.95cm, Y:17.08cm
    },

    BP: {
      file: "BP.pdf",
      isPortrait: false,
      namePos: { x: 185, y: 260, size: 45, centered: false },  // X:1.93cm, Y:8.12cm
      titlePos: { x: 421, y: 230, size: 20, centered: true },
      datePos: { x: 135, y: 19, size: 12, centered: false },  // X:10.64cm, Y:18.36cm
      idPos: { x: 265, y: 19, size: 12, centered: false },    // Y extrapolated
      qrPos: { x: 300 , y: 50, size: 70 },                  // X:16.95cm, Y:17.08cm
    },
  },

  default: {
    file: "EX.pdf",
    isPortrait: false,
    namePos: { x: 56, y: 623, size: 28, centered: false },
    titlePos: { x: 298, y: 500, size: 20, centered: true },
    datePos: { x: 310, y: 301, size: 12, centered: false },
    idPos: { x: 310, y: 281, size: 12, centered: false },
    qrPos: { x: 288, y: 384, size: 40 },
  }
};

module.exports = templateConfig;
