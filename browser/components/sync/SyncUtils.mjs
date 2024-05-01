
import { DriveSync } from '@kougen/gdrive-sync';

export const SyncUtils = {
  setupSync: () => {
    DriveSync.setCredentials()
  }

}