// database helper class insert the demo data on database


const MongoClient = require('mongodb').MongoClient
require('dotenv/config');



// database connection
MongoClient.connect(process.env.DB_CONNECTION, (err, client) => {
  if (err) return console.error(err)
   const db = client.db("test")
    
   console.log("inserting sample data to tree collection")

   db.collection('topics').insertMany( [
   { _id: "Water pollution by sewage and by inorganic waste ", parent: "Evaluate the effects of" },
   { _id: "Evaluate the effects of", parent: "Organisms and their Environment" },
   { _id: "Organisms and their Environment", parent: null },
   { _id: "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny ", parent: "Inheritance" },
   { _id: "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation ", parent: "Inheritance" },
   { _id: "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype ", parent: "Inheritance" },
   { _id: "Define a gene as a unit of inheritance and distinguish clearly between the terms gene and allele", parent: "Inheritance" },
   { _id: "Inheritance", parent: null },
   { _id: "Molecular Genetics", parent:null },
   { _id: "Cell Division", parent: null },
   { _id: "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring", parent: "Reproduction" },
   { _id: "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope ", parent: "Reproduction" },
   { _id: "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower ", parent: "Reproduction" },
   { _id: "State the functions of the sepals, petals, anthers and carpels ", parent: "Reproduction" },
   { _id: "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope", parent: "Reproduction" },
   { _id: "Outline the process of pollination and distinguish between self-pollination and cross-pollination", parent: "Reproduction" },
   { _id: "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower", parent: "Reproduction" },
   { _id: "Describe the growth of the pollen tube and its entry into the ovule followed by fertilisation (production of endosperm and details of development are not required) ", parent: "Reproduction" },
   { _id: "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis", parent: "Reproduction" },
   { _id: "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina ", parent: "Reproduction" },
   { _id: "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only", parent: "Reproduction" },
   { _id: "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus", parent: "Reproduction" },
   { _id: "State the functions of the amniotic sac and the amniotic fluid", parent: "Reproduction" },
   { _id: "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)", parent: "Reproduction" },
   { _id: "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled", parent: "Reproduction" },
   { _id: "Reproduction", parent: null },
   { _id: "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism ", parent: "Co-ordination and Response in Humans" },
   { _id: "State the role of the hormone adrenaline in boosting blood glucose levels and give examples of situations in which this may occur ", parent: "Co-ordination and Response in Humans" },
   { _id: "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas", parent: "Co-ordination and Response in Humans" },
   { _id: "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver ", parent: "Co-ordination and Response in Humans" },
   { _id: "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action", parent: "Co-ordination and Response in Humans" },
   { _id: "Outline the functions of sensory neurones, relay neurones and motor neurones ", parent: "Co-ordination and Response in Humans" },
   { _id: "State that the nervous system ??? brain, spinal cord and nerves, serves to co-ordinate and regulate bodily functions ", parent: "Co-ordination and Response in Humans" },
   { _id: "Describe the pupil reflex in response to bright and dim light", parent: "Co-ordination and Response in Humans" },
   { _id: "State the principal functions of component parts of the eye in producing a focused image of near and distant objects on the retina ", parent: "Co-ordination and Response in Humans" },
   { _id: "Describe the structure of the eye as seen in front view and in horizontal section", parent: "Co-ordination and Response in Humans" },
   { _id: "State the relationship between receptors, the central nervous system and the effectors ", parent: "Co-ordination and Response in Humans" },
   { _id: "Co-ordination and Response in Humans", parent: null },
   { _id: "Define homeostasis as the maintenance of a constant internal environment", parent: "Homeostasis" },
   { _id: "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback", parent: "Homeostasis" },
   { _id: "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue", parent: "Homeostasis" },
   { _id: "Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus", parent: "Homeostasis" },
   { _id: "Homeostasis", parent: null },
   { _id: "Define excretion and explain the importance of removing nitrogenous and other compounds from the body", parent: "Excretion in Humans" },
   { _id: "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine", parent: "Excretion in Humans" },
   { _id: "Outline the role of anti-diuretic hormone (ADH) in osmoregulation ", parent: "Excretion in Humans" },
   { _id: "Outline the mechanism of dialysis in the case of kidney failure", parent: "Excretion in Humans" },
   { _id: "Excretion in Humans", parent: null },
   { _id: "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries", parent: "Respiration in Humans" },
   { _id: "State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange", parent: "Respiration in Humans" },
   { _id: "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme", parent: "Respiration in Humans" },
   { _id: "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing", parent: "Respiration in Humans" },
   { _id: "Describe the effect of tobacco smoke and its major toxic components ??? nicotine, tar and carbon monoxide, on health", parent: "Respiration in Humans" },
   { _id: "Define and state the equation, in words and symbols, for aerobic respiration in humans", parent: "Respiration in Humans" },
   { _id: "Define and state the equation, in words only, for anaerobic respiration in humans", parent: "Respiration in Humans" },
   { _id: "Describe the effect of lactic acid in muscles during exercise", parent: "Respiration in Humans" },
   { _id: "Respiration in Humans", parent: null },
   { _id: "Platelets ??? fibrinogen to fibrin, causing clotting", parent: "State the role of blood in transport and defence" },
   { _id: "White blood cells ??? phagocytosis, antibody formation and tissue rejection", parent: "State the role of blood in transport and defence" },
   { _id: "Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins", parent: "State the role of blood in transport and defence" },
   { _id: "Red blood cells ??? haemoglobin and oxygen transport ", parent: "State the role of blood in transport and defence" },
   { _id: "Describe coronary heart disease in terms of the occlusion of coronary arteries and list the possible causes, such as diet, stress and smoking, stating the possible preventative measures", parent: "Transport in Humans" },
   { _id: "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)", parent: "Transport in Humans" },
   { _id: "Describe the structure and function of the heart in terms of muscular contraction and the working of valves", parent: "Transport in Humans" },
   { _id: "Describe the transfer of materials between capillaries and tissue fluid", parent: "Transport in Humans" },
   { _id: "Relate the structure of arteries, veins and capillaries to their functions", parent: "Transport in Humans" },
   { _id: "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions", parent: "Transport in Humans" },
   { _id: "State the role of blood in transport and defence", parent: "Transport in Humans" },
   { _id: "Identify the main blood vessels to and from the heart, lungs, liver and kidney", parent: "Transport in Humans" },
   { _id: "Transport in Humans", parent: null },
   { _id: "How wilting occurs", parent: "Describe and explain" },
   { _id: "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate", parent: "Describe and explain" },
   { _id: "Define the term translocation as the transport of food in the phloem tissue and illustrate the process through translocation studies", parent: "Transport in Flowering Plants" },
   { _id: "Describe and explain", parent: "Transport in Flowering Plants" },
   { _id: "Define the term transpiration and explain that transpiration is a consequence of gaseous exchange in plants", parent: "Transport in Flowering Plants" },
   { _id: "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels", parent: "Transport in Flowering Plants" },
   { _id: "Explain the movement of water between plant cells, and between them and the environment in terms of water potential (calculations on water potential are not required)", parent: "Transport in Flowering Plants" },
   { _id: "Relate the structure and functions of root hairs to their surface area, and to water and ion uptake", parent: "Transport in Flowering Plants" },
   { _id: "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope", parent: "Transport in Flowering Plants" },
   { _id: "Transport in Flowering Plants", parent: null },
   { _id: "Vascular bundles in transport", parent: "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the" },
   { _id: "Stomata and mesophyll cells in gaseous exchange", parent: "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the" },
   { _id: "Distribution of chloroplasts in photosynthesis ", parent: "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the" },
   { _id: "Discuss light intensity, carbon dioxide concentration and temperature as limiting factors on the rate of photosynthesis", parent: "Nutrition in Plants" },
   { _id: "Investigate and discuss the effects of varying light intensity, carbon dioxide concentration and temperature on the rate of photosynthesis (e.g. in submerged aquatic plant)", parent: "Nutrition in Plants" },
   { _id: "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses", parent: "Nutrition in Plants" },
   { _id: "Describe the intake of carbon dioxide and water by plants", parent: "Nutrition in Plants" },
   { _id: "State the equation, in words and symbols, for photosynthesis", parent: "Nutrition in Plants" },
   { _id: "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the", parent: "Nutrition in Plants" },
   { _id: "Nutrition in Plants", parent: null },
   { _id: "Breakdown of alcohol", parent: "State the role of the liver in " },
   { _id: "Metabolism of amino acids and the formation of urea", parent: "State the role of the liver in " },
   { _id: "Breakdown of red blood cells", parent: "State the role of the liver in " },
   { _id: "Fat digestion", parent: "State the role of the liver in " },
   { _id: "Carbohydrate metabolism", parent: "State the role of the liver in " },
   { _id: "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications", parent: "Nutrition in Humans" },
   { _id: "State the role of the liver in ", parent: "Nutrition in Humans" },
   { _id: "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver", parent: "Nutrition in Humans" },
   { _id: "Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption", parent: "Nutrition in Humans" },
   { _id: "Describe the functions of enzymes (e.g. amylase, maltase, protease, lipase) in digestion, listing the substrates and end-products", parent: "Nutrition in Humans" },
   { _id: "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal", parent: "Nutrition in Humans" },
   { _id: "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate", parent: "Nutrition in Humans" },
   { _id: "Nutrition in Humans", parent: null },
   { _id: "Lipids such as fats from glycerol and fatty acids", parent: "State that large molecules are synthesised from smaller basic units " },
   { _id: "Polypeptides and proteins from amino acids", parent: "State that large molecules are synthesised from smaller basic units " },
   { _id: "Glycogen from glucose", parent: "State that large molecules are synthesised from smaller basic units " },
   { _id: "Starch (iodine in potassium iodide solution)", parent: "Describe and carry out tests for" },
   { _id: "Reducing sugars (Benedict's solution)", parent: "Describe and carry out tests for" },
   { _id: "Protein (biuret test)", parent: "Describe and carry out tests for" },
   { _id: "Fats (ethanol emulsion)", parent: "Describe and carry out tests for" },
   { _id: "Carbohydrates", parent: "List the chemical elements which make up " },
   { _id: "Fats", parent: "List the chemical elements which make up " },
   { _id: "Protein", parent: "List the chemical elements which make up " },
   { _id: "Investigate and explain the effects of temperature and pH on the rate of enzyme catalysed reactions", parent:"Biological Molecules" },
   { _id: "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity", parent:"Biological Molecules" },
   { _id: "Explain enzyme action in terms of the ???lock and key??? hypothesis", parent:"Biological Molecules" },
   { _id: "State that large molecules are synthesised from smaller basic units ", parent:"Biological Molecules" },
   { _id: "Describe and carry out tests for", parent:"Biological Molecules" },
   { _id: "List the chemical elements which make up ", parent:"Biological Molecules" },
   { _id: "State the roles of water in living organisms", parent:"Biological Molecules" },
   { _id: "Biological Molecules", parent: null },
   { _id: "Absorption ??? root hair cells", parent: "State, in simple terms, the relationship between cell function and cell structure for the following:" },
   { _id: "Conduction and support ??? xylem vessels", parent: "State, in simple terms, the relationship between cell function and cell structure for the following:" },
   { _id: "Transport of oxygen ??? red blood cells", parent: "State, in simple terms, the relationship between cell function and cell structure for the following:" },
   { _id: "Ribosomes", parent: "Identify the following membrane systems and organelles from diagrams and electron micrographs:" },
   { _id: "Golgi body ", parent: "Identify the following membrane systems and organelles from diagrams and electron micrographs:" },
   { _id: "Mitochondria", parent: "Identify the following membrane systems and organelles from diagrams and electron micrographs:" },
   { _id: "Endoplasmic reticulum", parent: "Identify the following membrane systems and organelles from diagrams and electron micrographs:" },
   { _id: "Nucleus", parent: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:" },
   { _id: "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)", parent: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:" },
   { _id: "Cytoplasm", parent: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:" },
   { _id: "Cell wall", parent: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:" },
   { _id: "Cell surface membrane", parent: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:" },
   { _id: "Chloroplasts", parent: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:" },
   { _id: "Differentiate cell, tissue, organ and organ system", parent: "Cell Structure and Organisation" },
   { _id: "State, in simple terms, the relationship between cell function and cell structure for the following:", parent: "Cell Structure and Organisation" },
   { _id: "Compare the structure of typical animal and plant cells", parent: "Cell Structure and Organisation" },
   { _id: "State the functions of the membrane systems and organelles identified above", parent: "Cell Structure and Organisation" },
   { _id: "Identify the following membrane systems and organelles from diagrams and electron micrographs:", parent: "Cell Structure and Organisation" },
   { _id: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:", parent: "Cell Structure and Organisation" },
   { _id: "Cell Structure and Organisation", parent: null }

])

  /* console.log("inserting sample data to questions collection")

   db.collection('questions').insertMany( [
   { question: "1", Annotations: ["Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans", "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi","Define homeostasis as the maintenance of a constant internal environment","",""] },
   { question: "2", Annotations: ["Golgi body ", "Reducing sugars (Benedict's solution)","Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels","Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas"] },
   { question: "3", Annotations: ["Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only", "Identify, with the aid of diagrams, the main stages of mitosis","Compare the structure of typical animal and plant cells","","State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides "] },
  
   ]) */

db.collection('topics').createIndex( { parent: 1 } )   
console.log("done,press ctrl+c to exit")
  
})

