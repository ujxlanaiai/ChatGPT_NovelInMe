package springbootdev.FinalResult;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import springbootdev.Character.ChatService;

@Controller
@RequestMapping("/finalResult2")
public class FinalResult2Controller {

    private final ChatService chatService;
    private final ChatgptService chatgptService;

    public FinalResult2Controller(ChatService chatService, ChatgptService chatgptService) {
        this.chatService = chatService;
        this.chatgptService = chatgptService;
    }

    @GetMapping("")
    public String showFinalResult2(@RequestParam("result1") String result1, @RequestParam("option2") String option2, @RequestParam("ending2") String ending2,
                                    Model model){
        String inputFinalResult2 = "Please refine the following story while maintaining the content: " + result1 + option2 + ending2;

        String finalResult2 = chatService.getChatResponse(inputFinalResult2);
        model.addAttribute("finalResult2", finalResult2);

        return "finalResult2Page";
    }

}
