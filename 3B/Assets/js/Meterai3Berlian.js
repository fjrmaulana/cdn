syntax = "proto2";
package meterai3berlian;

message Payload {
    enum JobEnum {
        NTA = 1;
        HAT = 2;
        CRP = 3;
        CS = 4;
        PC = 5;
    }
    enum IsFinishEnum_ {
        T_ = 1;
        F_ = 2;
    }
    enum Printed_ {
        tT_ = 1;
        fF_ = 2;
    }
    enum exit_ {
        tN_ = 0;
        tY_ = 1;
    }
    enum redir_ {
        nored_ = 0;
        yesred_ = 1;
    }
     required JobEnum Job = 1[default=PC]; // Varint encoded
     required HandShake_ HandShake = 2;
     required IsFinishEnum_ IsFinishEnum = 3;
     required Printed_ Printed = 4;
     required DETAILS_ DETAILS = 5;    
	 required invo_ invo = 6;
     required exit_ exit = 7;
     required redir_ redir = 8;
}

message HandShake_{
	optional string client = 1;	
    optional string server = 2;
}

message DETAILS_{
			optional string icon_ = 1;
			optional string text_ = 2;
			optional string title_ = 3;
}
message invo_{
			optional string inv_ = 1;
}
