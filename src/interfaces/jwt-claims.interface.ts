export interface JwtClaims {
  /** Issuer */
  iss?: string;
  /** Subject */
  sub?: number;
  /** Audience */
  aud?: string;
  /** Expiration Time */
  exp?: number;
  /** Not Before */
  nbf?: number;
  /** Issued At */
  iat?: number;
  /** JWT ID */
  jti?: string;
  /** Full name */
  name?: string;
  /** Given name(s) or first name(s) */
  given_name?: string;
  /** Surname(s) or last name(s) */
  family_name?: string;
  /** Middle name(s) */
  middle_name?: string;
  /** Casual name */
  nickname?: string;
  /** Shorthand name by which the End-User wishes to be referred to */
  preferred_username?: string;
  /** Profile page URL */
  profile?: string;
  /** Profile picture URL */
  picture?: string;
  /** Web page or blog URL */
  website?: string;
  /** Preferred e-mail address */
  email?: string;
  /** True if the e-mail address has been verified; otherwise false */
  email_verified?: boolean;
  /** Gender */
  gender?: string;
  /** Birthday */
  birthdate?: string;
  /** Time zone */
  zoneinfo?: string;
  /** Locale */
  locale?: string;
  /** Preferred telephone number */
  phone_number?: string;
  /** True if the phone number has been verified; otherwise false */
  phone_number_verified?: boolean;
  /** Preferred postal address */
  address?: any; // Address format can be defined more precisely if needed
  /** Time the information was last updated */
  updated_at?: number;
  /** Authorized party - the party to which the ID Token was issued */
  azp?: string;
  /** Value used to associate a Client session with an ID Token */
  nonce?: string;
  /** Time when the authentication occurred */
  auth_time?: number;
  /** Access Token hash value */
  at_hash?: string;
  /** Code hash value */
  c_hash?: string;
  /** Authentication Context Class Reference */
  acr?: string;
  /** Authentication Methods References */
  amr?: string[];
  /** Public key used to check the signature of an ID Token */
  sub_jwk?: any; // JWK format can be defined more precisely if needed
  /** Confirmation */
  cnf?: any; // Confirmation format can be defined more precisely if needed
  /** SIP From tag header field parameter value */
  sip_from_tag?: string;
  /** SIP Date header field value */
  sip_date?: string;
  /** SIP Call-Id header field value */
  sip_callid?: string;
  /** SIP CSeq numeric header field parameter value */
  sip_cseq_num?: number;
  /** SIP Via branch header field parameter value */
  sip_via_branch?: string;
  /** Originating Identity String */
  orig?: string;
  /** Destination Identity String */
  dest?: string;
  /** Media Key Fingerprint String */
  mky?: string;
  /** Security Events */
  events?: any; // Security Events format can be defined more precisely if needed
  /** Time of Event */
  toe?: number;
  /** Transaction Identifier */
  txn?: string;
  /** Resource Priority Header Authorization */
  rph?: string;
  /** Session ID */
  sid?: string;
  /** Vector of Trust value */
  vot?: string;
  /** Vector of Trust trustmark URL */
  vtm?: string;
  /** Attestation level as defined in SHAKEN framework */
  attest?: string;
  /** Originating Identifier as defined in SHAKEN framework */
  origid?: string;
  /** Actor */
  act?: string;
  /** Scope Values */
  scope?: string;
  /** Client Identifier */
  client_id?: string;
  /** Authorized Actor - the party that is authorized to become the actor */
  may_act?: any; // Authorized Actor format can be defined more precisely if needed
  /** jCard data */
  jcard?: any; // jCard format can be defined more precisely if needed
  /** Number of API requests for which the access token can be used */
  at_use_nbr?: number;
  /** Diverted Target of a Call */
  div?: string;
  /** Original PASSporT (in Full Form) */
  opt?: string;
  /** Verifiable Credential as specified in the W3C Recommendation */
  vc?: any; // Verifiable Credential format can be defined more precisely if needed
  /** Verifiable Presentation as specified in the W3C Recommendation */
  vp?: any; // Verifiable Presentation format can be defined more precisely if needed
  /** SIP Priority header field */
  sph?: string;
  /** The ACE profile a token is supposed to be used with */
  ace_profile?: string;
  /** A nonce previously provided to the AS by the RS via the client */
  cnonce?: string;
  /** Lifetime of the token in seconds from the time the RS first sees it */
  exi?: number;
  /** Roles */
  roles?: string[];
  /** Groups */
  groups?: string[];
  /** Entitlements */
  entitlements?: string[];
  /** Token introspection response */
  token_introspection?: any; // Token introspection format can be defined more precisely if needed
  /** Nonce */
  eat_nonce?: string;
  /** The Universal Entity ID */
  ueid?: string;
  /** Semi-permanent UEIDs */
  sueids?: string[];
  /** Hardware OEM ID */
  oemid?: string;
  /** Model identifier for hardware */
  hwmodel?: string;
  /** Hardware Version Identifier */
  hwversion?: string;
  /** Indicates whether the software booted was OEM authorized */
  oemboot?: boolean;
  /** Indicates status of debug facilities */
  dbgstat?: string;
  /** The geographic location */
  location?: any; // Location format can be defined more precisely if needed
  /** Indicates the EAT profile followed */
  eat_profile?: string;
  /** The section containing submodules */
  submods?: any; // Submodules format can be defined more precisely if needed
  /** Uptime */
  uptime?: number;
  /** The number times the entity or submodule has been booted */
  bootcount?: number;
  /** Identifies a boot cycle */
  bootseed?: string;
  /** Certifications received as Digital Letters of Approval */
  dloas?: any; // Digital Letters of Approval format can be defined more precisely if needed
  /** The name of the software running in the entity */
  swname?: string;
  /** The version of software running in the entity */
  swversion?: string;
  /** Manifests describing the software installed on the entity */
  manifests?: any; // Manifests format can be defined more precisely if needed
  /** Measurements of the software, memory configuration and such on the entity */
  measurements?: any; // Measurements format can be defined more precisely if needed
  /** The results of comparing software measurements to reference values */
  measres?: any; // Measurement results format can be defined more precisely if needed
  /** Indicates intended use of the EAT */
  intuse?: string;
  /** CDNI Claim Set Version */
  cdniv?: string;
  /** CDNI Critical Claims Set */
  cdnicrit?: string;
  /** CDNI IP Address */
  cdniip?: string;
  /** CDNI URI Container */
  cdniuc?: string;
  /** CDNI Expiration Time Setting for Signed Token Renewal */
  cdniets?: string;
  /** CDNI Signed Token Transport Method for Signed Token Renewal */
  cdnistt?: string;
  /** CDNI Signed Token Depth */
  cdnistd?: string;
  /** Signature Validation Token */
  sig_val_claims?: any; // Signature Validation Token format can be defined more precisely if needed
  /** The claim authorization_details contains a JSON array of JSON objects representing the rights of the access token */
  authorization_details?: any; // Authorization details format can be defined more precisely if needed
  /** This container Claim is composed of the verification evidence related to a certain verification process and the corresponding Claims about the End-User which were verified in this process */
  verified_claims?: any; // Verified Claims format can be defined more precisely if needed
  /** A structured Claim representing the End-User's place of birth */
  place_of_birth?: any; // Place of Birth format can be defined more precisely if needed
  /** String array representing the End-User's nationalities */
  nationalities?: string[];
  /** Family name(s) someone has when they were born, or at least from the time they were a child */
  birth_family_name?: string;
  /** Given name(s) someone has when they were born, or at least from the time they were a child */
  birth_given_name?: string;
  /** Middle name(s) someone has when they were born, or at least from the time they were a child */
  birth_middle_name?: string;
  /** End-User's salutation, e.g., "Mr." */
  salutation?: string;
  /** End-User's title, e.g., "Dr." */
  title?: string;
  /** End-User's mobile phone number formatted according to ITU-T recommendation [E.164] */
  msisdn?: string;
  /** Stage name, religious name or any other type of alias/pseudonym with which a person is known in a specific context besides its legal name */
  also_known_as?: string;
  /** The HTTP method of the request */
  htm?: string;
  /** The HTTP URI of the request (without query and fragment parts) */
  htu?: string;
  /** The base64url-encoded SHA-256 hash of the ASCII encoding of the associated `at` claim value */
  ath?: string;
  /** The base64url-encoded SHA-256 hash of the ASCII encoding of the associated `c` claim value */
  atc?: string;
  /** Subject Identifier */
  sub_id?: string;
  /** Rich Call Data Information */
  rcd?: any; // Rich Call Data Information format can be defined more precisely if needed
  /** Rich Call Data Integrity Information */
  rcdi?: any; // Rich Call Data Integrity Information format can be defined more precisely if needed
  /** The URL from which the user consented for the claims */
  crn?: string;
  /** Message Integrity Information */
  msgi?: any; // Message Integrity Information format can be defined more precisely if needed
  /** Contains information necessary to access the Claims in a distributed claim source */
  _claim_names?: any; // Claim Names format can be defined more precisely if needed
  /** Contains information necessary to access the Claims in a distributed claim source */
  _claim_sources?: any; // Claim Sources format can be defined more precisely if needed
  /** Allowed RDAP Purposes */
  rdap_allowed_purposes?: string[];
  /** The Do-Not-Track allowed indicator */
  rdap_dnt_allowed?: boolean;
  /** The GeoHash of the physical location of the User Agent */
  geohash?: string | string[];
  [claim: string]: unknown;
}
