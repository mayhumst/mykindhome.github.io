<?php 

//include('completion_config.php')

//require_once('completion_config.php'); //establishes connection to mysql server
?>


<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <p></p>

        <py-script>

            class Room:
    
                def __init__(self, *task):
                    self.tasks = {}
                    
                    for i in task:
                        self.tasks[i] = False

                
                def check_completion(self):
                    completed = 0
                    
                    for task in self.tasks.values():
                        if task == True:
                            completed += 1

                        return completed / len(self.tasks)

            bathroom = Room('shower', 'sink')
            laundryroom = Room('washing machine')
            kitchen = Room('trash')
            livingroom = Room('air conditioner')
            bedroom = Room('lights', 'tv')

            print(bathroom.tasks)


        </py-script>


    </body>
</html>