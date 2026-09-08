import { imagePrompts } from './imagePrompts';
const base = import.meta.env.BASE_URL;
export const generatedAssets = {
  teleoperation: { src: `${base}generated/teleoperation.png`, alt: imagePrompts[0].alt, type: 'concept visual', status: 'generated', userApprovedConceptVisual: true },
  interaction: { src: `${base}generated/interaction.png`, alt: imagePrompts[1].alt, type: 'concept visual', status: 'generated', userApprovedConceptVisual: true },
};
