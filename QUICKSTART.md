CS1010S Quickstart Guide
==

This guide serves as an short guide for CS1010S tutors to get up and running with the remote cvs repository.

## Server Admin

#### Step 0: Generate SSH Keys (Optional)

**Note:** Optional step if you don't want to type in your password everytime you want to log in to the server. Can be skipped if you have already generated your ssh keys before. Do a simple check by entering the following command in your local machine.

    local $ cd ~/.ssh

If it shows "No such file or directory"

    local $ ssh-keygen -t rsa

If you are prompted for a passphrase, just hit **Enter** or else you will have to key it in everytime u ssh.

--
#### Step 1: Access the Server
After your account has been created, try logging in to the server.
    
    local $ ssh <username>@bleong.ddns.comp.nus.edu.sg

Change your password. Full reference [here](http://www.cyberciti.biz/faq/linux-set-change-password-how-to/):

    remote $ passwd
  
--  
#### Step 2: Add your public key (Optional)
**Note:** This is optional if you did not perform step 0, skip to the next section on CVS.

While still in the server, create the .ssh directory that will store public keys.

    remote $ mkdir ~/.ssh
    
Logout of the server with `logout` command. Now back in your local machine, copy the `id_rsa.pub` file into your home directory in the server.

    local $ scp ~/.ssh/id_rsa.pub <user>@bleong.ddns.comp.nus.edu.sg:.ssh/authorized_keys

Now verify that you can ssh into the server without having to key in your password.

    local $ ssh <user>@bleong.ddns.comp.nus.edu.sg
  
  
  
## CVS Guide (An Introduction)

CVS (Concurrent Versions System) is a tool to record the history of source files and the documents in a directory. If you know Git, learning CVS will be easy. Since many people are familiar with Git, references to Git will be constantly made throughout this guide. For the full documentation, please 

#### Step 1: Checkout the Remote Repository

Checking out a CVS repository is the equivalent of `git clone` in Git. Navigate to the directory that you would like to store the files of the remote repository and enter the following command:

    local $ cvs -d :ext:<user>@bleong.ddns.comp.nus.edu.sg:/var/cvsroot/ checkout cs1010s-2013
    
--
#### Step 2: Committing Files

The term **Commit** in CVS has a different meaning than in Git. In CVS, a commit is the Git equivalent of a combination of `git commit` and `git push`. There are two common use-cases:

**1. Adding Newly-Created Files:**  
Newly-created files have to be added before they can be committed.

    local $ cvs add <file_name>
    # Output:
    # cvs add: scheduling file 'file_name' for addition
    # cvs add: use 'cvs commit' to add this file permanently
  
Now CVS knows to keep track of this file. However, it will not show in the remote respository yet, they have to be committed first. The next step will cover instructions on how to update the remote repository about changes made to existing files.
  
**2. Updating Existing Files:**  
When you have made modifications to existing files or simply want to update the remote repository about your newly-created files, use the `cvs commit` command along with a commit message.

    local $ cvs commit -m "Your commit message here." <file_name>
    
You will see some output that indicates that the file has been update in the remote repository.  

**Note:** If you try to commit newly-created files that havent been added using `cvs add`, there will be an error telling you: `cvs commit: use 'cvs add' to create an entry for 'file_name'`. Proceed to `cvs add` before trying `cvs commit` again.

For easy adding and committing of files, you can use the `cvs add *` and `cvs commit *`, which will add/commit all the files in that directory. CVS will intelligently ignore the `CVS` folders that are used by the system itself. This may be abit slower but it is more convenient.

--
#### Step 3: Updating the Repository

When others have made changes to the repository, you will need to run the `cvs update` command to sync your local repository with the remote respository. This is similar to a `git pull`.


#### Bonus: CVS GUI Client

In all these commands are too overwhelming, there's a CVS GUI Client called [SmartCVS](http://www.syntevo.com/smartcvs/) that provides a nice GUI interface to handle all these commands.

## Endnotes

This is only meant to be a simple guide meant to help you get started on the CS1010S work. There are tons of other things to learn about CVS which will not be covered here. Content written here is to the best of my knowledge. If you find any mistakes with the content please let me know.

Credits to [Soedar](https://github.com/soedar) for figuring out how to add the public key into the server. (:
