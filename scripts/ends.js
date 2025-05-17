var ends = [ // {
  // basic: [
    "ou", "abe", "i", "mub", "och", "ode", "cer", "mor", "phine", "er", "ik", "po", "oke", "il", "ine", "co",
    "ver", "ame", "ien", "eck", "art", "tor", "um", "brum", "ello", "ith", "our", "outh", "ruff", "pur", "ette", "truk",
    "wor", "ord", "wim", "bur", "pul", "ry", "lub", "dine", "ters", "ey", "un", "ex", "ta", "cy", "mar", "io",
    "le", "da", "hud", "ong", "gue", "qure", "yu", "tiphe", "ire", "buor", "own", "in", "ing", "uop", "cam", "eje",
    "urt", "eip", "cho", "oze", "uz", "plur", "an", "eke", "eak", "in", "boo", "ox", "lexe", "pil", "wil", "be",
    "eign", "zol", "oel", "mor", "frub", "row", "ink", "dae", "ub", "lo", "om", "lip", "chren", "pho", "blur", "crul",
    "kar", "gor", "rill", "a", "blu", "plet", "cro", "fle", "bab", "chur", "ake", "nada", "ensa", "ight", "aze", "ive",
    "me", "it", "amus", "flur", "dil", "omie", "let", "ave", "aye", "idle", "ow", "no", "ye", "me", "u", "one",

    // mids
    "oh", "uc", "pua", "war", "raw", "err", "tre", "mun", "um", "im", "cre", "lik", "ruc", "pul",
    "chu", "ma", "tae", "rao", "mua", "ik", "plu", "bo", "ba", "bre", "ip", "chur", "prim", "dif",
    "mod", "dor", "lir", "fru", "apu", "moa", "bo", "rech", "ich", "fim", "helle", "len", "vrun", "aul",
    "wel", "ter", "plo", "ban", "kan", "kuor", "flu", "pro", "dor", "pama", "shur", "shor", "shum", "shu",
    "tor", "ro", "lo", "ko", "do", "mo", "ji", "pij", "wyr", "que", "qua", "on", "che", "oe",

    // shortEnds
    "es", "ed", "yu", "de", "d", "che", "dy", "ff", "es", "se", "e", "ey", "fe", "ar", "le",
    "ve", "n", "be", "m", "my", "j", "tt", "be", "le", "n", "b", "f", "ck", "k", "ken",
    "be", "res", "ell", "ly", "ie", "tch", "la", "ge", "g", "ver", "ke", "mun", "al", "ze", "z",
  // ],

  // orc: [
    "uch", "ub", "lub", "nub", "ub", "ob", "u", "op", "mo", "om", "el", "ov", "os", "al", "wu", "ej", "je", "jer",
    "kom", "go", "aub", "or", "ah", "ag", "ig", "lug", "bug", "fug", "mug", "ush", "ij", "un", "cu", "pok", "ure", "um",
    "for", "ork", "bul", "owl", "nul", "hul", "chul", "cho", "oh", "fo", "ukle", "meb", "tul", "olk", "wul", "se", "il", "uke",
    "bel", "elt", "ult", "ulk", "bil", "cul", "orl", "dol", "crol", "ual", "nol", "mol", "khul", "old", "er", "or", "it", "up",
    "uj", "ej", "kuj", "kej", "kug", "keg", "ech", "oz", "wop", "al", "mul", "tic", "ur", "ob", "ab", "ba", "chu", "mu",

    // mids
    "el", "eg", "hel", "chu", "ub", "bub", "ru", "fo", "um", "go", "ok", "tok", "mug", "nug", "bug", "uk", "kul",
    "tug", "op", "po", "mul", "nul", "rol", "col", "tol", "ol", "fol", "vo", "of", "wo", "zo", "oz", "al", "ut",
    "mut", "ux", "gro", "chol", "boo", "coo", "tu", "mup", "rud", "pum", "fum", "wub", "chub", "chum", "luk", "lok", "il",
    "mol", "nol", "jol", "uj", "ek", "wum", "gub", "vol", "pol", "wol", "u", "o", "ex", "quo", "bo", "glo", "to",

    // shortEnds
    "de", "rd", "ub", "ug", "ul", "up", "e", "om", "on", "ob", "ef", "ux", "ix", "ox", "ue", "op", "ol", "od", "am",
    "uf", "uz", "er", "uj", "uk", "ok", "ik", "ud", "ad", "um", "uh", "iz", "ow", "ar", "ke", "un", "po", "uch", "och",
    "en", "onk", "je", "go", "lo", "ig", "ort", "be", "und", "ew", "ha", "ah", "ov", "ove", "n", "o", "ex", "duj", "az",
  // ],

  // elf: [
    "nor", "hor", "rie", "ire", "ras", "ra", "rod", "od", "oth", "roth", "ang", "hel", "red", "leg", "gon", "bel", "born", "ian",
    "bor", "gorm", "dan", "fin", "uf", "aer", "eth", "thor", "ion", "thel", "che", "ah", "hil", "ell", "los", "mak", "len", "el",
    "ire", "amme", "enwe", "elu", "nel", "itch", "ye", "ene", "dhil", "eol", "stor", "anor", "ilas", "le", "ak", "op", "iss", "und",
    "ur", "ae", "ce", "ie", "ile", "wi", "qu", "psy", "yel", "hyr", "aro", "am", "an", "en", "bo", "eb", "ze", "ew",
    "ig", "ige", "es", "ese", "ex", "me", "ike", "e", "ero", "yn", "sau", "esh", "ash", "ish", "rom", "mon", "cye", "cae",

    // mids
    "wel", "luk", "umb", "ich", "ar", "tche", "tel", "til", "mak", "kil", "mir", "lu", "hin", "ing", "ol", "mo", "ron", "nel",
    "ere", "sto", "ean", "arf", "ind", "ing", "agu", "in", "ala", "thil", "o", "go", "al", "la", "im", "do", "ald", "wi",
    "las", "ego", "dir", "di", "lun", "iri", "ell", "ro", "oph", "phe", "og", "um", "ae", "aer", "ero", "at", "urg", "ur",
    "uo", "alg", "tie", "ra", "on", "ah", "ta", "ag", "ed", "r", "we", "wi", "min", "dri", "ril", "kil", "kal", "a",

    // shortEnds
    "or", "in", "le", "pe", "rke", "je", "ol", "e", "ze", "yke", "ef", "qu", "as", "al", "ic", "yro", "yn", "er",
    "yr", "il", "es", "ur", "ue", "io", "eo", "ele", "eth", "ath", "eck", "zu", "ez", "az", "emp", "ed", "ich", "te",
    "it", "las", "on", "uil", "and", "elm", "ep", "wen", "ar", "es", "un", "we", "ew", "bor", "im", "ian", "fin", "ron",
  // ],
  
  // human: [
    "pan", "da", "hai", "res", "deol", "dol", "del", "ta", "tim", "my", "tur", "ner", "ya", "fur", "nan", "el", "ine", "ne", "bur",
    "ger", "gus", "lus", "ius", "on", "or", "and", "tian", "lav", "ox", "us", "tus", "uc", "i", "vu", "u", "nus", "ol", "tan",
    "nis", "on", "orn", "dut", "dur", "von", "tel", "wat", "ron", "ren", "dez", "vous", "ris", "spri", "red", "ard", "ur", "url", "arl",
    "mer", "hug", "rul", "us", "if", "y", "ou", "are", "rea", "din", "g", "thi", "s", "i", "hav", "e", "per", "ish", "ed", "l",
    "ol", "pub", "eg", "ug", "esh", "ech", "ush", "esh", "nil", "kog", "tud", "tun", "ish", "ush", "kre", "ol", "bay", "reb", "ro",

    // mids
    "et", "mut", "ik", "il", "el", "ge", "gel", "mud", "ok", "cul", "que", "ze", "ken", "ich", "fel", "fio", "fil", "chen", "pou",
    "min", "as", "la", "cas", "gas", "com", "up", "ya", "tor", "em", "vee", "see", "kin", "sho", "shi", "chus", "bra", "bur", "ope",
    "acu", "aci", "dor", "del", "pro", "duc", "cer", "zun", "zum", "zam", "sim", "chem", "dil", "ign", "twi", "sted", "do", "pe", "le",
    "an", "and", "the", "fan", "ta", "cre", "dit", "card", "san", "des", "cam", "mer", "sike", "des", "ine", "er", "bit", "get", "it",

    // shortEnds
    "ven", "ben", "ime", "bir", "ul", "el", "ek", "ik", "som", "ean", "ric", "ik", "ke", "it", "om", "on", "ic", "kil", "tuc", "ok",
    "ich", "ick", "ush", "kes", "tih", "con", "vic", "ice", "li", "el", "cru", "ise", "ey", "ay", "lin", "ley", "net", "rad", "fra", "dit",
    "kir", "lor", "hac", "ech", "chil", "jil", "mel", "ock", "mil", "ox", "ail", "as", "ard", "oin", "yt", "te", "y", "chy", "ely", "muk",
  ]
// }
