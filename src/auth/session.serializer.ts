import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  // Serialize user details to be stored into the session
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    // In this example, we're serializing the entire user object.
    // You can choose to serialize only the user ID for a more lightweight session.
    done(null, user);
  }

  // Deserialize user details after retrieving from the session
  deserializeUser(
    payload: any,
    done: (err: Error, payload: string) => void,
  ): any {
    // In this example, we're deserializing the user object.
    // This is where you can retrieve the user data using the user ID.
    done(null, payload);
  }
}
