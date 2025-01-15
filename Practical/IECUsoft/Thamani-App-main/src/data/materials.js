const materials = [
  {
    code:"AMM",
    name:"Ammo Pack"
  },
  {
    code:"BAG",
    name:"Bag"
  },
  {
    code:"BAL",
    name:"Bale"
  },
  {
    code:"BBL",
    name:"Barrel"
  },
  {
    code:"BDL",
    name:"Bundle"
  },
  {
    code:"BEM",
    name:"Beam"
  },
  {
    code:"BIC",
    name:"Bing Chest"
  },
  {
    code:"BIN",
    name:"Bin"
  },
  {
    code:"BKG",
    name:"Bulk Bag"
  },
  {
    code:"BKT",
    name:"Bucket"
  },
  {
    code:"BLE",
    name:"Bale"
  },
  {
    code:"BLK",
    name:"Bulk"
  },
  {
    code:"BOB",
    name:"Bobbin"
  },
  {
    code:"BOT",
    name:"Bottle"
  },
  {
    code:"BOX",
    name:"Box"
  },
  {
    code:"BRG",
    name:"Barge"
  },
  {
    code:"BSK",
    name:"Basket"
  },
  {
    code:"BXI",
    name:"Box with inner container"
  },
  {
    code:"BXT",
    name:"Bucket"
  },
  {
    code:"CAB",
    name:"Cabinet"
  },
  {
    code:"CAG",
    name:"Cage"
  },
  {
    code:"CAN",
    name:"Can"
  },
  {
    code:"CAR",
    name:"Carcass"
  },
  {
    code:"CAS",
    name:"Case"
  },
  {
    code:"CBC",
    name:"Container Bulk Cargo"
  },
  {
    code:"CBY",
    name:"Carboy"
  },
  {
    code:"CCS",
    name:"Can Case"
  },
  {
    code:"CHE",
    name:"Cheeses"
  },
  {
    code:"CHS",
    name:"Chest"
  },
  {
    code:"CLD",
    name:"Car Load, Rail"
  },
  {
    code:"CNA",
    name:"Household goods, Containers, wood"
  },
  {
    code:"CNB",
    name:"Container MSC ISO Military Airlift Container ISO, Light weight 8x8x20 foot air"
  },
  {
    code:"CNC",
    name:"Container, Navy Cargo Transporter"
  },
  {
    code:"CND",
    name:"Container, Commercial Highway lift"
  },
  {
    code:"CNE",
    name:"Engine Container"
  },
  {
    code:"CNF",
    name:"Multiwall Container Secured to Warehouse Pallet"
  },
  {
    code:"CNT",
    name:"Container (Not used in Sea AMS)"
  },
  {
    code:"CNX",
    name:"CONEX   Container Express"
  },
  {
    code:"COL",
    name:"Coil"
  },
  {
    code:"CON",
    name:"Cones"
  },
  {
    code:"COR",
    name:"Cord"
  },
  {
    code:"CRD",
    name:"Cradle"
  },
  {
    code:"CRT",
    name:"Crate"
  },
  {
    code:"CSK",
    name:"Cask"
  },
  {
    code:"CTN",
    name:"Carton"
  },
  {
    code:"CUB",
    name:"Cube"
  },
  {
    code:"CYL",
    name:"Cylinder"
  },
  {
    code:"DBK",
    name:"Dry Bulk"
  },
  {
    code:"DRK",
    name:"Double Length Rack"
  },
  {
    code:"DRM",
    name:"Drum"
  },
  {
    code:"DSK",
    name:"Double Length Skid"
  },
  {
    code:"DTB",
    name:"Double Length Toe Bin"
  },
  {
    code:"DUF",
    name:"Duffel Bag"
  },
  {
    code:"ENV",
    name:"Envelope"
  },
  {
    code:"FIR",
    name:"Firkin"
  },
  {
    code:"FLO",
    name:"Flo bin"
  },
  {
    code:"FLX",
    name:"Liner Bag Liquid"
  },
  {
    code:"FRM",
    name:"Frame"
  },
  {
    code:"FSK",
    name:"Flask"
  },
  {
    code:"FWR",
    name:"Forward"
  },
  {
    code:"GAL",
    name:"Gallon"
  },
  {
    code:"GOH",
    name:"Garments on Hangers"
  },
  {
    code:"HED",
    name:"Heads of Beef"
  },
  {
    code:"HGH",
    name:"Hogshead"
  },
  {
    code:"HMP",
    name:"Hamper"
  },
  {
    code:"HPT",
    name:"Hopper Truck"
  },
  {
    code:"HRB",
    name:"On Hanger or Rack in Boxes"
  },
  {
    code:"HRK",
    name:"Half Standard Rack"
  },
  {
    code:"HTB",
    name:"Half Standard Tote Bin"
  },
  {
    code:"JAR",
    name:"Jar"
  },
  {
    code:"JUG",
    name:"Jug"
  },
  {
    code:"KEG",
    name:"Keg"
  },
  {
    code:"KIT",
    name:"Kit"
  },
  {
    code:"KRK",
    name:"Knockdown Rack"
  },
  {
    code:"KTB",
    name:"Knockdown Tote Bin"
  },
  {
    code:"LBK",
    name:"Liquid Bulk"
  },
  {
    code:"LIF",
    name:"Lifts"
  },
  {
    code:"LOG",
    name:"Logs"
  },
  {
    code:"LSE",
    name:"Loose"
  },
  {
    code:"LUG",
    name:"Lugs"
  },
  {
    code:"LVN",
    name:"Lift Van"
  },
  {
    code:"MLV",
    name:"MILVAN   Military Van"
  },
  {
    code:"MRP",
    name:"Multi Roll Pack"
  },
  {
    code:"MSV",
    name:"MSCVAN   Military Sealift Command Van"
  },
  {
    code:"MXD",
    name:"Mixed Type Pack"
  },
  {
    code:"NOL",
    name:"Noil"
  },
  {
    code:"OVW",
    name:"Overwrap"
  },
  {
    code:"PAL",
    name:"Pail"
  },
  {
    code:"PCK",
    name:"Packed   not otherwise specified"
  },
  {
    code:"PCL",
    name:"Parcel"
  },
  {
    code:"PCS",
    name:"Pieces"
  },
  {
    code:"PIR",
    name:"Pims"
  },
  {
    code:"PKG",
    name:"Package"
  },
  {
    code:"PLF",
    name:"Platform"
  },
  {
    code:"PLN",
    name:"Pipeline"
  },
  {
    code:"PLT",
    name:"Pallet (Not used in Sea AMS)"
  },
  {
    code:"POV",
    name:"Private Vehicle"
  },
  {
    code:"PRK",
    name:"Pipe Rack"
  },
  {
    code:"QTR",
    name:"Quarters of Beef"
  },
  {
    code:"RAL",
    name:"Rail (Semiconductor)"
  },
  {
    code:"RCK",
    name:"Rack"
  },
  {
    code:"REL",
    name:"Reel"
  },
  {
    code:"ROL",
    name:"Roll"
  },
  {
    code:"RVR",
    name:"Reverse Reel"
  },
  {
    code:"SAK",
    name:"Sack"
  },
  {
    code:"SBC",
    name:"Liner Bag Dry"
  },
  {
    code:"SCS",
    name:"Suitcase"
  },
  {
    code:"SHK",
    name:"Shook"
  },
  {
    code:"SHT",
    name:"Sheet"
  },
  {
    code:"SID",
    name:"Sides of Beef"
  },
  {
    code:"SKD",
    name:"Skid"
  },
  {
    code:"SKE",
    name:"Skid elevating or lift truck"
  },
  {
    code:"SLP",
    name:"Slip Sheet"
  },
  {
    code:"SLV",
    name:"Sleeve"
  },
  {
    code:"SPI",
    name:"Sin Cylinders"
  },
  {
    code:"SPL",
    name:"Spool"
  },
  {
    code:"SVN",
    name:"SEAVAN   Sea Van"
  },
  {
    code:"TBE",
    name:"Tube"
  },
  {
    code:"TBN",
    name:"Tote Bin"
  },
  {
    code:"TIN",
    name:"Tin"
  },
  {
    code:"TKR",
    name:"Tank Car"
  },
  {
    code:"TKT",
    name:"Tank Truck"
  },
  {
    code:"TLD",
    name:"Intermodal Trainler/Container Load (Rail)"
  },
  {
    code:"TNK",
    name:"Tank"
  },
  {
    code:"TRC",
    name:"Tierce"
  },
  {
    code:"TRI",
    name:"Triwall Box"
  },
  {
    code:"TRK",
    name:"Trunk or Chest"
  },
  {
    code:"TRY",
    name:"Tray"
  },
  {
    code:"TSS",
    name:"Trunk, Salesmen Sample"
  },
  {
    code:"TTC",
    name:"Tote Can"
  },
  {
    code:"TUB",
    name:"Tub"
  },
  {
    code:"UNP",
    name:"Unpacked"
  },
  {
    code:"UNT",
    name:"Unit"
  },
  {
    code:"VEH",
    name:"Vehicles"
  },
  {
    code:"VPK",
    name:"Van Pack"
  },
  {
    code:"WDC",
    name:"Wooden Case"
  },
  {
    code:"WHE",
    name:"On Own Wheels"
  },
  {
    code:"WLC",
    name:"Wheeled Carrier"
  },
  {
    code:"WRP",
    name:"Wrapped"
  }]