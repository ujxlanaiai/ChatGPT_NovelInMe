package springbootdev.Ending;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import springbootdev.Character.ChatService;

@Controller
@RequestMapping("/ending2")
public class Ending2Controller {

    private final ChatService chatService;
    private final ChatgptService chatgptService;

    public Ending2Controller(ChatService chatService, ChatgptService chatgptService) {
        this.chatService = chatService;
        this.chatgptService = chatgptService;
    }

    @GetMapping("")
    public String showEnding2(@RequestParam("result1") String result1, @RequestParam("option2") String option2,
                              Model model){
        String inputEnding2 = "Create and show the ending of the story: " + result1 + option2;

        String ending2 = chatService.getChatResponse(inputEnding2);

        model.addAttribute("ending2", ending2);
        model.addAttribute("option2", option2);
        model.addAttribute("result1", result1);

        return "ending2Page";
    }


}
